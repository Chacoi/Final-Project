import { Component, OnInit } from '@angular/core';
import { ComunidadService } from '../services/comunidad.service';
import { Comunidad } from 'src/models/comunidad';
import { Discusion } from 'src/models/discusion';
import { DiscusionService } from '../services/discusion.service';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from '../services/usuario.service';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.less']
})
export class ComunidadComponent implements OnInit {

  discusion = new Discusion;
  discusionList   : Discusion[];
  usuarioList: Usuario[];
  comunidades: AngularFireList<any>;
  constructor(private usuarioService: UsuarioService, private discService: DiscusionService, public comunidadService: ComunidadService, private db: AngularFireDatabase) {
    
   }
firebase = firebase;
  ngOnInit(): void {
    this.discService.getDiscusion()
    .snapshotChanges()
    .subscribe(item=> {
      this.discusionList = [];
      item.forEach(element => {
        let x = JSON.parse(JSON.stringify(element.payload));
        x["$key"] = element.key;
        this.discusionList.push(x as Discusion);
      })
    });
    this.usuarioService.getUsuario()
    .snapshotChanges()
    .subscribe(item=> {
      this.usuarioList = [];
      item.forEach(element => {
        let x = JSON.parse(JSON.stringify(element.payload));
        x["$key"] = element.key;
        this.usuarioList.push(x as Usuario);
      })
    })
  }

  unirUsuario(idUsuario: string, idComunidad: string){
    const ref = this.db.database.ref();
    let key: string;
    return ref.child('usuarios').orderByChild('id').equalTo(idUsuario).once('value').then(snap => {
      snap.forEach(data => {
        key = data.key;
      })
      this.comunidades = this.db.list('usuarios/' + key + '/comunidades');
      this.usuarioList.forEach(element => {
      if(idUsuario == element.id){
        this.comunidades.push({
          idComunidad: idComunidad
        })
      }
    });
      return key;
    })
    
  }

  buscarDiscusion(discusion: Discusion, tituloDiscusion: string){
    this.discusion = discusion;
    const ref = this.db.database.ref();
    let key: string;
    return ref.child('discusiones').orderByChild('titulo').equalTo(tituloDiscusion).once('value').then(snap => {
      snap.forEach(data => {
        key = data.key;
      })
      console.log(key + " funcion buscar usuario");
      this.discService.verDiscusion(this.discusion, key);
      return key;
    })
  }

  pasarIdComunidad(){
    this.discService.selectDiscusion.idComunidad = this.comunidadService.selectComunidad.id;
  }
}
