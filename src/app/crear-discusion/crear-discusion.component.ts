import { Component, OnInit } from '@angular/core';

//---Forms---
import { FormGroup, FormControl, Validators } from '@angular/forms';

//---models---
import { Discusion } from '../../models/discusion';

//---services---
import { DiscusionService } from '../services/discusion.service';

//-----firebase-----
import { AngularFireAuth}                             from '@angular/fire/auth';
import { Router }                                     from '@angular/router';
import * as firebase                                  from 'firebase';


@Component({
  selector: 'app-crear-discusion',
  templateUrl: './crear-discusion.component.html',
  styleUrls: ['./crear-discusion.component.less']
})
export class CrearDiscusionComponent implements OnInit {

  constructor(private discService: DiscusionService, public af: AngularFireAuth, private router: Router){};
  private discusion = new Discusion();

    //---------Validaciones de campos---------
  form = new FormGroup({
    titulo: new FormControl('', [                           //Campo requerido
      Validators.required
    ]),
    contenido: new FormControl('', [                              //Campo requerido
      Validators.required,
      Validators.maxLength(150)
    ])
  });

   //---------Accesos---------
  get titulo(){
    return this.form.get('titulo')
  }
  get contenido(){
    return this.form.get('contenido');
  }

  ngOnInit(): void {
    this.discService.getDiscusion();
  }

  onSubmit(form){
    this.discService.selectDiscusion.id         = firebase.auth().currentUser.uid;
    this.discService.selectDiscusion.autor      = firebase.auth().currentUser.displayName;
    this.discService.selectDiscusion.titulo     = this.titulo.value;
    this.discService.selectDiscusion.contenido  = this.contenido.value;
    this.discService.insertDiscusion(this.discService.selectDiscusion);
    this.resetForm(form);
    this.router.navigateByUrl('/discusiones');
  }

  //----Limpieza formulario----------
  resetForm(form?: FormGroup){
    if(form != null)
      form.reset();
      this.discService.selectDiscusion = new Discusion();
  }
  
}
