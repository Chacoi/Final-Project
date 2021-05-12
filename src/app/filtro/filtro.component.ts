import { Component, OnInit } from '@angular/core';
import { AsignaturasComponent } from '../asignaturas/asignaturas.component';
import { Asignatura } from '../../models/asignatura';

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
  
  constructor() {
    this.asignaturas.push(this.calculo);
   }

  ngOnInit(): void {
  }

}
