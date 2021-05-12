import { Component, OnInit } from '@angular/core';
import { Discusion } from '../../models/discusion';

@Component({
  selector: 'app-discusiones',
  templateUrl: './discusiones.component.html',
  styleUrls: ['./discusiones.component.less']
})
export class DiscusionesComponent implements OnInit {

  discusion = new Discusion('123', 'Chacoi', 'La retroalimentación del trabajo 2 aún no se sube', 'wena wena como estamos','04-08-20', null);

  constructor() { }

  ngOnInit(): void {
  }

}
