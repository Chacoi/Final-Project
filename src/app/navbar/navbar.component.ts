import { Component, OnInit }  from '@angular/core';
import { AngularFireAuth}     from '@angular/fire/auth';
import { Router }             from '@angular/router';

@Component({
  selector    : 'app-navbar',
  templateUrl : './navbar.component.html',
  styleUrls   : ['./navbar.component.less']
})

export class NavbarComponent implements OnInit {
  name  : any;
  state : string = '';
  constructor(public af: AngularFireAuth, private router: Router) {
    this.af.credential.subscribe(auth => {
      if(auth){
        this.name = auth;
      }
    });
   }

  ngOnInit(): void {
  }
  logout(){
    this.af.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }
}
