import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';
import { UsuarioService }                     from '../services/usuario.service';

//-----firebase-----
import { AngularFireAuth}       from '@angular/fire/auth';
import { AngularFireDatabase }  from '@angular/fire/database';
import * as firebase            from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  error: any;
  private provider = new firebase.auth.GoogleAuthProvider();
  constructor(public usuarioService: UsuarioService, public af: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    this.af.credential.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/');
      }
    });
    
  }

  form = new FormGroup({
    password: new FormControl('', [                           //Campo requerido, 8 caracteres mínimo
      Validators.required
    ]),
    email: new FormControl('', [                              //Campo requerido, no puede contener espacios
      Validators.required
    ])
  });

  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
  firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      console.log(this.email.value);
      this.usuarioService.updateIdUsuario(firebase.auth().currentUser.uid, this.email.value);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    this.router.navigateByUrl('/');
  }

  loginGoogle(){
    firebase.auth()
    .signInWithPopup(this.provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      
      let credential = result.credential as firebase.auth.OAuthCredential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = credential.accessToken;
      // The signed-in user info.
      let user = result.user;  
      this.buscarUsuario(firebase.auth().currentUser.uid)
      .then((res) => {
        if(res){
          console.log("Usuario registrado anteriormente");
        }else {
          this.usuarioService.selectUsuario.correo  = firebase.auth().currentUser.email;
          this.usuarioService.selectUsuario.id      = firebase.auth().currentUser.uid;
          this.usuarioService.selectUsuario.password= "no-pass";
          this.usuarioService.selectUsuario.rango   = "Aprendiz";
          this.usuarioService.selectUsuario.puntos  = 0;
          this.usuarioService.selectUsuario.rol     = "Persona";
          this.usuarioService.selectUsuario.username= firebase.auth().currentUser.displayName;
          console.log(this.usuarioService.selectUsuario);
          this.usuarioService.insertUsuario(this.usuarioService.selectUsuario);
        }
      });
    }).catch((error) => {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
    });
  }

  private buscarUsuario(id: string): Promise<string> {
    const ref = this.db.database.ref();
    let key: string;
    return ref.child('usuarios').orderByChild('id').equalTo(id).once('value').then(snap => {
      snap.forEach(data => {
        key = data.key;
      })
      return key;
    })
  }
}

