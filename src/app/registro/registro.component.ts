import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { UsuarioService }                             from '../services/usuario.service';
import { Usuario }                                    from 'src/models/usuario';
import { AngularFireAuth}                             from '@angular/fire/auth';
import { Router }                                     from '@angular/router';
import * as firebase                                  from 'firebase';
@Component({
  selector    : 'app-registro',
  templateUrl : './registro.component.html',
  styleUrls   : ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  state: string = '';
  error: any;
  constructor(public usuarioService: UsuarioService,
    public af: AngularFireAuth, private router: Router){};
    private usuario = new Usuario();

    //---------Validaciones de campos---------
  form = new FormGroup({
    username: new FormControl('', [                           //Campo requerido, 5 caracteres mínimo
      Validators.required,                                    //No puede contener espacios
      Validators.minLength(5)
    ]),
    password: new FormControl('', [                           //Campo requerido, 8 caracteres mínimo
      Validators.required,
      Validators.minLength(8)
    ]),
    email: new FormControl('', [                              //Campo requerido, no puede contener espacios
      Validators.required,
    ])
  });

  //---------Accesos---------
  get username(){
    return this.form.get('username');
  }
  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password');
  }

  ngOnInit(): void {
    this.usuarioService.getUsuario();
    this.resetForm();
  }

  //-------Registro de usuario-----
  onSubmit(form){
    firebase.auth().createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    this.usuarioService.selectUsuario.correo  = this.email.value;
    this.usuarioService.selectUsuario.id      = "no-id-yet";
    this.usuarioService.selectUsuario.password= this.password.value;
    this.usuarioService.selectUsuario.rango   = "Aprendiz";
    this.usuarioService.selectUsuario.puntos  = 0;
    this.usuarioService.selectUsuario.rol     = "Persona";
    this.usuarioService.selectUsuario.username= this.username.value;
    console.log(this.username.value);
    this.usuarioService.insertUsuario(this.usuarioService.selectUsuario);
    this.resetForm(form);
  }

//----Limpieza formulario----------
  resetForm(form?: FormGroup){
    if(form != null)
      form.reset();
      this.usuarioService.selectUsuario = new Usuario();
  }
}

