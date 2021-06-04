import { Component, OnInit }  from '@angular/core';
import { AngularFireAuth}     from '@angular/fire/auth';
import { Router }             from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.less']
})
export class InicioComponent implements OnInit {
  name  : any;
  state : string = '';
  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.authState.subscribe(auth => {
      if(auth){
        this.name = auth;
      }
    });
   }

  logout(){
    this.af.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }
  ngOnInit(): void {
  }

}
