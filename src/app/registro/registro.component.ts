import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './validators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      UsernameValidators.cantContainSpace /*,
      UsernameValidators.isUnique*/
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    email: new FormControl('', [
      Validators.required,
      UsernameValidators.cantContainSpace
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
  }
}

