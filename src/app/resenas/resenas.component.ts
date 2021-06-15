import { Component, OnInit } from '@angular/core';
import { Discusion } from 'src/models/discusion';
import { Comentario } from 'src/models/comentario';
import { DiscusionService } from '../services/discusion.service';
import { AngularFireDatabase }  from '@angular/fire/database';
import * as firebase from 'firebase';
import { ComentarioService } from '../services/comentario.service';
import { ResenaService } from '../services/resena.service';

@Component({
  selector: 'app-resenas',
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.less']
})
export class ResenasComponent implements OnInit {
  comentarioList = this.db.list('resenas/comentarios');
  comentarios: Comentario[] = [];
  comentarioActual = new Comentario();
  idDiscusion: string;
  comentario: string;
  constructor(public resenaService: ResenaService, private db: AngularFireDatabase, private comentarioService: ComentarioService) { }

  
  ngOnInit(): void {
  }

}
