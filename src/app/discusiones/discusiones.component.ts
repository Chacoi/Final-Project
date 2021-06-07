import { Component, OnInit } from '@angular/core';
import { Discusion } from '../../models/discusion';
import { DiscusionService } from '../services/discusion.service';
import {DetalleDiscusionComponent} from '../detalle-discusion/detalle-discusion.component';
@Component({
  selector: 'app-discusiones',
  templateUrl: './discusiones.component.html',
  styleUrls: ['./discusiones.component.less']
})
export class DiscusionesComponent implements OnInit {

  //discusion = new Discusion('123', 'Chacoi', 'La retroalimentación del trabajo 2 aún no se sube', 'wena wena como estamos','04-08-20', null);

  discusionList   : Discusion[];
  constructor(public discService: DiscusionService) { }

  ngOnInit(): void {
    this.discService.getDiscusion()
    .snapshotChanges()
    .subscribe(item=> {
      this.discusionList = [];
      item.forEach(element => {
        let x = JSON.parse(JSON.stringify(element.payload));
        x["$key"] = element.key;
        this.discusionList.push(x as Discusion);
      })
    })
  }
  
 


}
