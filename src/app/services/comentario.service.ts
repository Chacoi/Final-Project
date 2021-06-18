import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Comentario } from '../../models/comentario';
import { DiscusionService } from '../services/discusion.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  
  idDiscusion: string;
  comentarioList   : AngularFireList<any>;
  selectComentario : Comentario = new Comentario();
  
  constructor(private firebase: AngularFireDatabase, private discService: DiscusionService) {
    
  }
  
    getComentario(idDiscusion: string){
      return this.comentarioList = this.firebase.list('discusiones/' + idDiscusion + '/comentarios');
    }

    insertComentario(comentario: Comentario, idDiscusion: string){

      this.comentarioList = this.firebase.list('discusiones/' + idDiscusion + '/comentarios');

      console.log(comentario);
      
      //----Inserción de datos-----
      this.comentarioList.push({
        id      : comentario.id,
        autor: comentario.autor,
        contenido: comentario.contenido,
        tipo  : comentario.tipo,
        perfil   : comentario.perfil,
        comends: comentario.comends
      });
    }

    agregarLike(idResena: string, idDiscusion: string, idUsuario: string){
      this.comentarioList = this.firebase.list('discusiones/' + idDiscusion + '/comentarios/');
      console.log(idDiscusion + ' ' + idResena + ' ' + idUsuario);
      this.comentarioList.update(idResena, {
        comends: firebase.firestore.FieldValue.arrayUnion(idUsuario)
      });
    }
/*
    updateUsuario(comentario: Comentario){
      
      //---Inserción de datos----
      this.comentarioList.update(comentario.id, {
      id      : usuario.id,
      username: usuario.username,
      password: usuario.password,
      correo  : usuario.correo,
      rango   : usuario.rango, 
      rol     : usuario.rol,
      });
    }*/
}
