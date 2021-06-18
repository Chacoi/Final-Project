import { Usuario } from '../models/usuario';
import { Discusion } from '../models/discusion';

export class Comunidad{
    id          : string;
    titulo      : string;
    contenido   : string;
    imagen      : string;

    constructor(id?, titulo?, contenido?, imagen?){
        this.id         = id;
        this.titulo     = titulo;
        this.contenido  = contenido;
        this.imagen     = imagen;
    }
}