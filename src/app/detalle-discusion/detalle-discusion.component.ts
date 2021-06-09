import { Component, OnInit } from '@angular/core';
import { Discusion } from 'src/models/discusion';
import { Comentario } from 'src/models/comentario';
import { DiscusionService } from '../services/discusion.service';
import { AngularFireDatabase }  from '@angular/fire/database';
import * as firebase from 'firebase';
import { ComentarioService } from '../services/comentario.service';

@Component({
  selector: 'app-detalle-discusion',
  templateUrl: './detalle-discusion.component.html',
  styleUrls: ['./detalle-discusion.component.less']
})
export class DetalleDiscusionComponent implements OnInit {

  comentarioList = this.db.list('discusiones/comentarios');
  comentarios: Comentario[] = [];
  comentarioActual = new Comentario();
  idDiscusion: string;
  comentario: string;
  
  constructor(public discService: DiscusionService, private db: AngularFireDatabase, private comentarioService: ComentarioService) {
    // const uid = this.discService.getDiscusion().;
    // const list = this.db.database.list(`discusiones/${uid}/comentarios`);
   }
   crearComentario(){ 
    this.comentarioActual.autor     = firebase.auth().currentUser.displayName;
    this.comentarioActual.id        = this.discService.idDiscusion;
    this.comentarioActual.contenido = this.comentario;
    this.comentarioActual.perfil    = "pendiente";
    this.comentarioActual.tipo      = true;
    this.comentarioService.insertComentario(this.comentarioActual, this.discService.idDiscusion);
   }
  
  // obtenerComentarios(){
  //   this.db.list("discusiones").. then((querySnapshot) => {
  //     querySnapshot. forEach((doc) => {
  //     console. log(`${doc. id} => ${doc. data()}`);
  //     });
  //   }
  // }



  ngOnInit(): void {
  }

  
}
