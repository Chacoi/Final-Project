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

    // insertAsignatura(asignatura: Asignatura){
    //   this.asignaturaList.push({
    //     sigla: asignatura.getSigla(),
    //     nombre: asignatura.getNombre(),
    //     horario: asignatura.getHorario(),
    //     sala: asignatura.getSala(),
    //     imagen: asignatura.getImagen(),
    //     puntuacion: asignatura.getPuntuacion(),
    //     facultad: asignatura.getFacultad(),
    //     carrera: asignatura.getCarrera(),
    //     comunidades: asignatura.getComunidades(),
    //     comentarios: asignatura.getComentarios()
    //   });
    // }
    insertAsignatura(asignatura: Asignatura){
      this.asignaturaList.push({
        sigla: asignatura.getSigla(),
        nombre: asignatura.getNombre(),
        horario: asignatura.getHorario(),
        sala: asignatura.getSala(),
        imagen: asignatura.getImagen(),
        puntuacion: asignatura.getPuntuacion(),
        facultad: asignatura.getFacultad(),
        carrera: asignatura.getCarrera(),
        comunidades: asignatura.getComunidades(),
        comentarios: asignatura.getComentarios()
      });
    }

    // updateAsignatura(asignatura: Asignatura){
    //   this.asignaturaList.update(asignatura.getSigla(), {
    //     sigla: asignatura.getSigla(),
    //     nombre: asignatura.getNombre(),
    //     horario: asignatura.getHorario(),
    //     sala: asignatura.getSala(),
    //     imagen: asignatura.getImagen(),
    //     puntuacion: asignatura.getPuntuacion(),
    //     facultad: asignatura.getFacultad(),
    //     carrera: asignatura.getCarrera(),
    //     comunidades: asignatura.getComunidades(),
    //     comentarios: asignatura.getComentarios()
    //   })
    // }


   
}
