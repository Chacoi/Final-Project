import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Comunidad } from '../../models/comunidad';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {
  idComunidad: string;
  comunidadList: AngularFireList<any>;
  selectComunidad: Comunidad = new Comunidad();
  constructor(private firebase: AngularFireDatabase) {}
  
    getComunidad(){
      return this.comunidadList = this.firebase.list('comunidades');
    }

    insertComunidad(comunidad: Comunidad){

      //----Inserción de datos-----
      this.comunidadList.push({
        id   : comunidad.id,
        titulo  : comunidad.titulo,
        contenido : comunidad.contenido,
        imagen    : comunidad.imagen
      });
    }

    verComunidad(comunidad: Comunidad){
      this.selectComunidad.id = comunidad.id;
      this.selectComunidad.imagen      = comunidad.imagen;
      this.selectComunidad.titulo     = comunidad.titulo;
      this.selectComunidad.contenido  = comunidad.contenido;
    }
/*
    updateComunidad(asignatura: Asignatura){
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
*/

   
}
