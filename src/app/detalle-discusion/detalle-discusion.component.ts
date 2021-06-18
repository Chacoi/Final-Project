import { Component, OnInit } from '@angular/core';
import { Discusion } from 'src/models/discusion';
import { Comentario } from 'src/models/comentario';
import { DiscusionService } from '../services/discusion.service';
import { AngularFireDatabase, AngularFireList }  from '@angular/fire/database';
import * as firebase from 'firebase';
import { ComentarioService } from '../services/comentario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore} from '@angular/fire/firestore';


@Component({
  selector: 'app-detalle-discusion',
  templateUrl: './detalle-discusion.component.html',
  styleUrls: ['./detalle-discusion.component.less']
})
export class DetalleDiscusionComponent implements OnInit {

  
  comentarioList: Comentario[];
  comentarios: AngularFireList<any>;
  comentarioActual = new Comentario();
  like: string;
  
  
  
  constructor(public discService: DiscusionService, 
              private db: AngularFireDatabase, 
              private comentarioService: ComentarioService) {
    
  }

  //--- input de los comentarios
  form = new FormGroup({
    comentario: new FormControl('',[
      Validators.required
    ])
  });

  get comentario(){
    return this.form.get('comentario');
  }
  
  //--- Captando y guardando la información del comentario
   onSubmit(form){ 
    this.comentarioActual.autor     = firebase.auth().currentUser.displayName;
    this.comentarioActual.id        = this.discService.idDiscusion;
    this.comentarioActual.contenido = this.comentario.value;
    this.comentarioActual.perfil    = "pendiente";
    this.comentarioActual.tipo      = true;
    this.comentarioActual.comends   = ["ghost"];
    const ref = this.db.database.ref();
    let key: string;                               //--- Búsqueda de la discusión a la que pertenece
    return ref.child('discusiones').orderByChild('contenido').equalTo(this.discService.selectDiscusion.contenido).once('value').then(snap => {
      snap.forEach(data => {
        key = data.key;
      })
      this.comentarioService.insertComentario(this.comentarioActual, key);
      return key;
    });
    this.resetForm(form);                         //Vaciado del input
   }
  

   toggleLike(contenido, idDiscusion){        //--- Intento de función para almacenar los likes en los comentarios
    const ref = this.db.database.ref();
    let key: string;
    return ref.child('discusiones/' + idDiscusion + '/comentarios').orderByChild('contenido').equalTo(contenido).once('value').then(snap => {
      snap.forEach(data => {
        key = data.key;
      })
      this.comentarioService.agregarLike(key, idDiscusion, firebase.auth().currentUser.uid);
      return key;
    });
   }
  // obtenerComentarios(){
  //   this.db.list("discusiones").. then((querySnapshot) => {
  //     querySnapshot. forEach((doc) => {
  //     console. log(`${doc. id} => ${doc. data()}`);
  //     });
  //   }
  // }


//--- Inicialización  de la lista de comentarios según la discusión en la que se está
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
  resetForm(form?: FormGroup){
    if(form != null)
      form.reset();
  }

}
