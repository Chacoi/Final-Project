import { Component, OnInit } from '@angular/core';


//Models
import { Asignatura }         from '../../models/asignatura';

//Forms
import { NgForm }             from '@angular/forms';

//Services
import { ComunidadService }  from '../services/comunidad.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.less']
})
export class AsignaturasComponent implements OnInit {
/*
  
  constructor(private asignaturaService: ComunidadService) {};
 */
  ngOnInit(): void {                        //Instancia de la asignatura y reinicio de formulario
    // this.asignaturaService.getComunidad();
    // this.resetForm();
  }
/*
  onSubmit(formAsignatura: NgForm){         //Inserción de datos a la DB y reinicio de formulario
    console.log(formAsignatura);
      this.asignaturaService.insertAsignatura(formAsignatura.value);
    // else
    //   this.asignaturaService.updateAsignatura(formAsignatura.value);
    this.resetForm(formAsignatura);
  }

  resetForm(formAsignatura?: NgForm){       //Reinicio de formulario
    if(formAsignatura != null)
      formAsignatura.reset();
      this.asignaturaService.selectAsignatura = new Asignatura();
  }*/
}
