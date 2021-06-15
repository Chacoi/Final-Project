
import { Component, OnInit } from '@angular/core';
import { NgForm, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Asignatura } from '../../models/asignatura';
import { Router }                                     from '@angular/router';
import * as firebase                                  from 'firebase';

//Services
import { ResenaService } from '../services/resena.service';
@Component({
  selector: 'app-crear-resena',
  templateUrl: './crear-resena.component.html',
  styleUrls: ['./crear-resena.component.less']
})

export class CrearResenaComponent implements OnInit {

  constructor(public resenaService: ResenaService, private router: Router) { }

  ngOnInit(): void{
    this.resenaService.getResena();
    this.resetForm();
    
  }
    //---------Validaciones de campos---------
    form = new FormGroup({
      idResena: new FormControl('',[
        Validators.required
      ]),
      nombre: new FormControl('', [                           //Campo requerido
        Validators.required
      ]),
      descripcion: new FormControl('', [                              //Campo requerido
        Validators.required,
        Validators.maxLength(150)
      ])
    });
  
     //---------Accesos---------
    get idResena(){
      return this.form.get('idResena')
    }
    get nombre(){
      return this.form.get('nombre')
    }
    get descripcion(){
      return this.form.get('descripcion');
    }
    
  
    
  
    onSubmit(form){
      this.resenaService.selectResena.idResena = this.idResena.value;
      this.resenaService.selectResena.nombre = this.nombre.value;
      this.resenaService.selectResena.descripcion = this.descripcion.value;
      this.resenaService.selectResena.puntuacion = 0;
      this.resenaService.insertResena(this.resenaService.selectResena);
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