import { Component, OnInit }  from '@angular/core';
import { AngularFireAuth}     from '@angular/fire/auth';
import { Router }             from '@angular/router';
import { Asignatura }         from '../../models/asignatura';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.less']
})
export class FiltroComponent implements OnInit {
  
  asignaturas: Asignatura[] = [];
  selection: String;
  calculo = new Asignatura("INF4323-1", "calculo diferencial", "Jueves, 8:15-9:35", "RA4-1", "../../assets/libros antiguos.jpg", "3,4","Facultad de Ingenieria", "Ing. de ejec. en informatica", null, null);
  prueba(facultad: String){
    this.selection = facultad;
    console.log(this.selection);
  }
  name: any;
  state: string = '';
  constructor(public af: AngularFireAuth, private router: Router) {
    this.asignaturas.push(this.calculo);
    this.af.authState.subscribe(auth => {
      if(auth){
        this.name = auth;
      }
    });
   }
   
   

  ngOnInit(): void {
  }

}
