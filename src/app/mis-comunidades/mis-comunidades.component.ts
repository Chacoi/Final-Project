import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Comunidad } from 'src/models/comunidad';
import { ComunidadService } from '../services/comunidad.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-mis-comunidades',
  templateUrl: './mis-comunidades.component.html',
  styleUrls: ['./mis-comunidades.component.less']
})
export class MisComunidadesComponent implements OnInit {
  usuarioList: Usuario[];
  comunidadList: Comunidad[];
  firebase = firebase;
  constructor(private usuarioService: UsuarioService, public comunidadService: ComunidadService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario()
    .snapshotChanges()
    .subscribe(item=> {
      this.usuarioList = [];
      item.forEach(element => {
        let x = JSON.parse(JSON.stringify(element.payload));
        x["$key"] = element.key;
        this.usuarioList.push(x as Usuario);
      })
    });
    this.comunidadService.getComunidad()
    .snapshotChanges()
    .subscribe(item=> {
      this.comunidadList = [];
      item.forEach(element => {
        let x = JSON.parse(JSON.stringify(element.payload));
        x["$key"] = element.key;
        this.comunidadList.push(x as Comunidad);
      })
    })
  }

  usuarioActual(idUsuario: string): string{
    this.usuarioList.forEach(element => {
      if(idUsuario == element.id){
        return element.id;
      }
    });
    return;
  }

}
