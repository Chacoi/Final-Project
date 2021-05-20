import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Asignatura } from '../../models/asignatura';

//Services
import { AsignaturaService } from '../services/asignatura.service';

@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.less']
})
export class CrearAsignaturaComponent implements OnInit {

  constructor(public asignaturaService: AsignaturaService) { }

  ngOnInit(): void {
    this.asignaturaService.getAsignatura();
    this.resetForm();
  }
  onSubmit(formAsignatura: NgForm){
    //if(formAsignatura.value.sigla == null)
      this.asignaturaService.insertAsignatura(formAsignatura.value);
    // else
    //   this.asignaturaService.updateAsignatura(formAsignatura.value);

    this.resetForm(formAsignatura);
  }

  resetForm(formAsignatura?: NgForm){
    if(formAsignatura != null)
      formAsignatura.reset();
      this.asignaturaService.selectAsignatura = new Asignatura();
  }

}
