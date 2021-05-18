import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../../models/asignatura';
import { NgForm } from '@angular/forms';

//Services
import { AsignaturaService } from '../services/asignatura.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.less']
})
export class AsignaturasComponent implements OnInit {

constructor(private asignaturaService: AsignaturaService) { }

  ngOnInit(): void {
    this.asignaturaService.getAsignatura();
    this.resetForm();
  }

  onSubmit(formAsignatura: NgForm){
    if(formAsignatura.value.sigla == null)
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
