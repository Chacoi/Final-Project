import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../../models/asignatura';
@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.less']
})
export class AsignaturasComponent implements OnInit {
  calculo = new Asignatura("INF4323-1", "calculo diferencial", "Jueves, 8:15-9:35", "RA4-1", "../../assets/libros antiguos.jpg", "3,4","Facultad de Ingenieria", "Ing. de ejec. en informatica", null, null);

constructor() { }

  ngOnInit(): void {
  }

}
