import { Component, OnInit } from '@angular/core';


//Models
import { Asignatura }         from '../../models/asignatura';

//Forms
import { NgForm }             from '@angular/forms';

//Services
import { AsignaturaService }  from '../services/asignatura.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.less']
})
export class AsignaturasComponent implements OnInit {

  
  constructor(private asignaturaService: AsignaturaService) {};
 
  ngOnInit(): void {                        //Instancia de la asignatura y reinicio de formulario
    this.asignaturaService.getAsignatura();
    this.resetForm();
  }

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
  }
}
