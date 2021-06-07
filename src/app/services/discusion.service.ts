import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Discusion } from 'src/models/discusion';
import { Usuario }                              from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class DiscusionService {

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
      //fecha       : discusion.fecha, 
      comentarios : discusion.comentarios,
    });
  }

  verDiscusion(discusion: Discusion){
    this.selectDiscusion.autor = discusion.autor;
    this.selectDiscusion.titulo= discusion.titulo;
    this.selectDiscusion.contenido = discusion.contenido;
    
  }
}
