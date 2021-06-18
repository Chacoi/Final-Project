
export class Discusion{
    id         : string;
    autor      : string;
    titulo     : string;
    contenido  : string;
    fecha      : Date;
    fechaDia   : string;
    fechaMes   : string;
    fechaAno   : string;
    idComunidad: string;

    constructor(id?, autor?, titulo?, contenido?, idComunidad?){
        this.id             = id;
        this.autor          = autor;
        this.titulo         = titulo;
        this.contenido      = contenido;
        this.fecha          = new Date();
        this.idComunidad    = idComunidad;
    }
}