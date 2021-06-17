import { Component, OnInit } from '@angular/core';
import { Discusion } from 'src/models/discusion';
import { Comentario } from 'src/models/comentario';
import { DiscusionService } from '../services/discusion.service';
import { AngularFireDatabase }  from '@angular/fire/database';
import * as firebase from 'firebase';
import { ComentarioService } from '../services/comentario.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalle-discusion',
  templateUrl: './detalle-discusion.component.html',
  styleUrls: ['./detalle-discusion.component.less']
})
export class DetalleDiscusionComponent implements OnInit {

  
  comentarioList: Comentario[];
  comentarioActual = new Comentario();
  idDiscusion: string;
  
  
  
  constructor(public discService: DiscusionService, private db: AngularFireDatabase, private comentarioService: ComentarioService
    , private route: Router) {
    
  }

  form = new FormGroup({
    comentario: new FormControl('',[
      Validators.required
    ])
  });

  get comentario(){
    return this.form.get('comentario');
  }
  
   onSubmit(form){ 
    this.comentarioActual.autor     = firebase.auth().currentUser.displayName;
    this.comentarioActual.id        = this.discService.idDiscusion;
    this.comentarioActual.contenido = this.comentario.value;
    this.comentarioActual.perfil    = "pendiente";
    this.comentarioActual.tipo      = true;
    const ref = this.db.database.ref();
    let key: string;
    return ref.child('discusiones').orderByChild('contenido').equalTo(this.discService.selectDiscusion.contenido).once('value').then(snap => {
      snap.forEach(data => {
        key = data.key;
      })
      this.comentarioService.insertComentario(this.comentarioActual, key);
      return key;
    })
    
   }
  
  // obtenerComentarios(){
  //   this.db.list("discusiones").. then((querySnapshot) => {
  //     querySnapshot. forEach((doc) => {
  //     console. log(`${doc. id} => ${doc. data()}`);
  //     });
  //   }
  // }



  ngOnInit(): void {
    const ref = this.db.database.ref();
    let key: string;
    ref.child('discusiones').orderByChild('contenido').equalTo(this.discService.selectDiscusion.contenido).once('value').then(snap => {
      snap.forEach(data => {
        key = data.key;
      })
      this.comentarioService.getComentario(key)
      .snapshotChanges()
      .subscribe(item=> {
        this.comentarioList = [];
        item.forEach(element => {
          let x = JSON.parse(JSON.stringify(element.payload));
          x["$key"] = element.key;
          this.comentarioList.push(x as Comentario);
        })
      })
    })
   
  }

  
}
