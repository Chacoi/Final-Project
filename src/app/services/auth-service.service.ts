import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private firebaseAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) { }

  canActivate(): Observable<boolean>
{
  return Observable.from(this.firebaseAuth.authState)
  .take(1)
  .map(state => !!state)
  .do(authenticated => {
    if
    (!authenticated) this.router.navigate(['/login']);
  })
}
}