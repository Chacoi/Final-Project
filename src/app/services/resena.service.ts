import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Resena } from 'src/models/resena';

@Injectable({
  providedIn: 'root'
})
export class ResenaService {
  idResena: string;
  resenaList: AngularFireList<any>;
  selectResena: Resena = new Resena();
  constructor(private firebase: AngularFireDatabase) { }
    getResena(){
      return this.resenaList = this.firebase.list('resenas');
    }

    insertResena(resena: Resena){
      this.resenaList.push({
        idResena: resena.idResena,
        nombre: resena.nombre,
        descripcion: resena.descripcion,
        puntuacion: resena.puntuacion
      });
    }

    verResena(resena: Resena){
      this.selectResena.idResena = resena.idResena;
      this.selectResena.nombre = resena.nombre;
      this.selectResena.descripcion = resena.descripcion;
      this.selectResena.puntuacion = resena.puntuacion;

    }

}
