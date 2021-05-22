import { Component, OnInit }                          from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { UsernameValidators }                         from './validators';
import { UsuarioService }                             from '../services/usuario.service';
import { Usuario }                                    from 'src/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  constructor(public usuarioService: UsuarioService){};
  form = new FormGroup({
    username: new FormControl('', [                           //Campo requerido, 5 caracteres mínimo
      Validators.required,                                    //No puede contener espacios
      Validators.minLength(5),
      //UsernameValidators.cantContainSpace 
      /*,
      UsernameValidators.isUnique*/
    ]),
    password: new FormControl('', [                           //Campo requerido, 8 caracteres mínimo
      Validators.required,
      Validators.minLength(8)
    ]),
    email: new FormControl('', [                              //Campo requerido, no puede contener espacios
      Validators.required,
      //UsernameValidators.cantContainSpace
    ])
  });

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

  onSubmit(form){
    this.usuarioService.selectUsuario.correo  = this.email.value;
    this.usuarioService.selectUsuario.id      = "KOSl0skd2";
    this.usuarioService.selectUsuario.password= this.password.value;
    this.usuarioService.selectUsuario.rango   = "noob";
    this.usuarioService.selectUsuario.rol     = "estudiante";
    this.usuarioService.selectUsuario.username= this.username.value;
    console.log(this.username.value);
    //if(formAsignatura.value.sigla == null)
      this.usuarioService.insertUsuario(this.usuarioService.selectUsuario);
    // else
    //   this.asignaturaService.updateAsignatura(formAsignatura.value);

    this.resetForm(form);
  }

  resetForm(form?: FormGroup){
    if(form != null)
      form.reset();
      this.usuarioService.selectUsuario = new Usuario();
  }
}

