import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Discusion } from 'src/models/discusion';
import { Usuario }                              from '../../models/usuario';
import { ComentarioService } from '../services/comentario.service';

@Injectable({
  providedIn: 'root'
})
export class DiscusionService {

  idDiscusion: string;
  discusionList   : AngularFireList<any>;
  selectDiscusion : Discusion = new Discusion();
  constructor(private firebase: AngularFireDatabase) {
    this.discusionList = this.firebase.list('discusiones');
  }

  getDiscusion(){
    return this.discusionList = this.firebase.list('discusiones');
  }

  insertDiscusion(discusion: Discusion){
    console.log(discusion);
    
    //----Inserción de datos-----
    this.discusionList.push({
      id          : discusion.id,
      autor       : discusion.autor,
      titulo      : discusion.titulo,
      contenido   : discusion.contenido,
      idComunidad : discusion.idComunidad
    });
  }

  verDiscusion(discusion: Discusion, idDiscusion: string){
    console.log(idDiscusion + "funcion ver discusion");
    this.selectDiscusion.autor      = discusion.autor;
    this.selectDiscusion.titulo     = discusion.titulo;
    this.selectDiscusion.contenido  = discusion.contenido;
    this.selectDiscusion.id                = idDiscusion;
    this.idDiscusion                     = idDiscusion;
  }

}
