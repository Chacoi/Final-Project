import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Asignatura } from '../../models/asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  asignaturaList: AngularFireList<any>;
  selectAsignatura: Asignatura = new Asignatura();
  constructor(private firebase: AngularFireDatabase) {}
  
    getAsignatura(){
      return this.asignaturaList = this.firebase.list('asignaturas');
    }

    insertAsignatura(asignatura: Asignatura){

      //----Inserción de datos-----
      this.asignaturaList.push({
        sigla   : asignatura.sigla,
        nombre  : asignatura.nombre,
        horario : asignatura.horario,
        sala    : asignatura.sala, 
        imagen  : asignatura.imagen,
        facultad: asignatura.facultad 
      });
    }

    updateAsignatura(asignatura: Asignatura){
      this.asignaturaList.update(asignatura.sigla, {
      //---Inserción de datos----
        sigla   : asignatura.sigla,
        nombre  : asignatura.nombre,
        horario : asignatura.horario,
        sala    : asignatura.sala,
        imagen  : asignatura.imagen,
        facultad: asignatura.facultad,
      });
    }


   
}
