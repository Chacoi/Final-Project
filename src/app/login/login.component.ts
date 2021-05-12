import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor() { }
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
