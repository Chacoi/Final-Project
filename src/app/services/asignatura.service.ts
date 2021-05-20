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
      //----Traspaso getters------
      //let sigla   = asignatura.Sigla;
      // let nombre  = asignatura.getNombre();
      // let horario = asignatura.getHorario();
      // let sala    = asignatura.getSala();
      // let imagen  = asignatura.getImagen();
      // let facultad = asignatura.getFacultad();

      let sigla   = asignatura.sigla;
      let nombre  = asignatura.nombre;
      let horario = asignatura.horario;
      let sala    = asignatura.sala;
      let imagen  = asignatura.imagen;
      let facultad = asignatura.facultad;

      //----Inserción de datos-----
      this.asignaturaList.push({
        sigla, nombre, horario, sala, imagen, facultad 
      });
    }

    updateAsignatura(asignatura: Asignatura){
      this.asignaturaList.update(asignatura.sigla, {
        sigla: asignatura.sigla,
        nombre: asignatura.nombre,
        horario: asignatura.horario,
        sala: asignatura.sala,
        imagen: asignatura.imagen,
        puntuacion: asignatura.puntuacion,
        facultad: asignatura.facultad,
      });
    }


   
}
