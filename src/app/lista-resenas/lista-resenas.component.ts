import { Component, OnInit } from '@angular/core';
import { Resena } from '../../models/resena';
import { ResenaService } from '../services/resena.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-lista-resenas',
  templateUrl: './lista-resenas.component.html',
  styleUrls: ['./lista-resenas.component.less']
})
export class ListaResenasComponent implements OnInit {

  resena = new Resena;
  resenaList   : Resena[];
  constructor(public resenaService: ResenaService, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.resenaService.getResena()
    .snapshotChanges()
    .subscribe(item=> {
      this.resenaList = [];
      item.forEach(element => {
        let x = JSON.parse(JSON.stringify(element.payload));
        x["$key"] = element.key;
        this.resenaList.push(x as Resena);
      })
    })
  }

}
