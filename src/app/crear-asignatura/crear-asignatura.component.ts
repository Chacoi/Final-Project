import { Component, OnInit } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Asignatura } from '../../models/asignatura';
import { Router }                                     from '@angular/router';
import * as firebase                                  from 'firebase';

//Services
import { ComunidadService } from '../services/comunidad.service';

@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.less']
})
export class CrearAsignaturaComponent implements OnInit {

  constructor(public comunidadService: ComunidadService, private router: Router) { }

  ngOnInit(): void{
    this.comunidadService.getComunidad();
    this.resetForm();
    
  }
    //---------Validaciones de campos---------
    form = new FormGroup({
      idComunidad: new FormControl('',[
        Validators.required
      ]),
      titulo: new FormControl('', [                           //Campo requerido
        Validators.required
      ]),
      contenido: new FormControl('', [                              //Campo requerido
        Validators.required,
        Validators.maxLength(150)
      ]),
      imagen: new FormControl('', [
        Validators.required
      ])
    });
  
     //---------Accesos---------
    get idComunidad(){
      return this.form.get('idComunidad')
    }
    get titulo(){
      return this.form.get('titulo')
    }
    get contenido(){
      return this.form.get('contenido');
    }
    get imagen(){
      return this.form.get('imagen');
    }
  
    
  
    onSubmit(form){
      this.comunidadService.selectComunidad.id = this.idComunidad.value;
      this.comunidadService.selectComunidad.titulo = this.titulo.value;
      this.comunidadService.selectComunidad.contenido = this.contenido.value;
      this.comunidadService.selectComunidad.imagen = this.imagen.value;
      this.comunidadService.insertComunidad(this.comunidadService.selectComunidad);
      this.resetForm(form);
      this.router.navigateByUrl('/');
    }
  
    //----Limpieza formulario----------
    resetForm(form?: FormGroup){/*
      if(form != null)
        form.reset();
        this.discService.selectDiscusion = new Discusion();*/
    }
}
