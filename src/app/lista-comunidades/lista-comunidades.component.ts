import { Component, OnInit } from '@angular/core';
import { Comunidad } from '../../models/comunidad';
import { ComunidadService } from '../services/comunidad.service';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-lista-comunidades',
  templateUrl: './lista-comunidades.component.html',
  styleUrls: ['./lista-comunidades.component.less']
})
export class ListaComunidadesComponent implements OnInit {
  comunidad = new Comunidad;
  comunidadList   : Comunidad[];
  constructor(public comunidadService: ComunidadService, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.comunidadService.getComunidad()
    .snapshotChanges()
    .subscribe(item=> {
      this.comunidadList = [];
      item.forEach(element => {
        let x = JSON.parse(JSON.stringify(element.payload));
        x["$key"] = element.key;
        this.comunidadList.push(x as Comunidad);
      })
    })
  }

  
}
