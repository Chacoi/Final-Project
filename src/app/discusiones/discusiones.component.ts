import { Component, OnInit } from '@angular/core';
import { Discusion } from '../../models/discusion';
import { DiscusionService } from '../services/discusion.service';
import {DetalleDiscusionComponent} from '../detalle-discusion/detalle-discusion.component';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-discusiones',
  templateUrl: './discusiones.component.html',
  styleUrls: ['./discusiones.component.less']
})
export class DiscusionesComponent implements OnInit {

  //discusion = new Discusion('123', 'Chacoi', 'La retroalimentación del trabajo 2 aún no se sube', 'wena wena como estamos','04-08-20', null);
  discusion = new Discusion;
  discusionList   : Discusion[];
  constructor(public discService: DiscusionService, private db: AngularFireDatabase) { }

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
  
  buscarDiscusion(discusion: Discusion, id: string){
    this.discusion = discusion;
    const ref = this.db.database.ref();
    let key: string;
    return ref.child('discusiones').orderByChild('titulo').equalTo(id).once('value').then(snap => {
      snap.forEach(data => {
        key = data.key;
      })
      console.log(key + " funcion buscar usuario");
      this.discService.verDiscusion(this.discusion, key);
      return key;
    })
  }

  // convertToString(idDiscusion: string): string{
  //   console.log(idDiscusion + " funcion convert to string")
  //   let idConverted: string;
  //   this.buscarUsuario(idDiscusion).then((res) => {
  //     idConverted =res;
  //   });
  //   console.log(idConverted + " funcion convert to string")
  //   return idConverted;
  // }


}
