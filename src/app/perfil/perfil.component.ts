import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.less']
})
export class PerfilComponent implements OnInit {
  usuario = new Usuario;
  usuarioList: Usuario[];
  idUsuario = firebase.auth().currentUser.uid;
  constructor(public usuarioService: UsuarioService, private db: AngularFireDatabase) { }

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
    })
  }

  // getUsuario(): Usuario{
  //   this.usuarioList.forEach(element => {
  //     if(element.id == firebase.auth().currentUser.uid){
  //       return element;
  //     }
  //   })
  //   return null;
  // }

}
