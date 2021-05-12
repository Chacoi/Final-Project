import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/models/comentario';
import {Asignatura } from '../../models/asignatura'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
  calculo = new Asignatura('MAT2320','calculo1',['8:15','9:35'], 'RA4-1','../../assets/libros antiguos.jpg','3.8',"Facultad de Ingenieria","Ing. en ejec. de informatica", null, null);
  comentarios: Comentario[] = [];
  resena: Comentario;
  contenido: String;

  crearResena(contenido){
    this.resena = new Comentario('42re52r', 'user133', contenido, 'resena', '../../assets/libros antiguos.jpg');
    this.comentarios.push(this.resena);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
