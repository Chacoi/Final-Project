import { Component, OnInit } from '@angular/core';
import { Discusion } from 'src/models/discusion';
import { Comentario } from 'src/models/comentario';

@Component({
  selector: 'app-detalle-discusion',
  templateUrl: './detalle-discusion.component.html',
  styleUrls: ['./detalle-discusion.component.less']
})
export class DetalleDiscusionComponent implements OnInit {

  comentarios: Comentario[] = [];
 
  comentario1: Comentario;
  comentario: string;
  crearComentario(comentario){ 
    this.comentario1 = new Comentario('83ue83', 'user133', comentario, '12-09-20', '../../assets/libros antiguos.jpg');
    this.comentarios.push(this.comentario1);
    
  }
  contenido: String = `Lorem ipsum, dolor ficiis possimus, 
  quasi temporibus laboriosam. Itaque, nam iste.`;
  discusion = new Discusion('83ue83', 'user133', 'Gente tengo un problema', this.contenido, '12-09-20', null);
  /*comentario1 = new Comentario('42re52r', 'user133', this.contenido, 'resena', '../../assets/libros antiguos.jpg');
  comentario2 = new Comentario('42ue872r', 'user69', this.contenido, 'discusion', '../../assets/libros antiguos.jpg');
  */
  
  constructor() { }

  ngOnInit(): void {
  }

}
