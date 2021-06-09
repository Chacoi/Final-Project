import { Comentario } from '../models/comentario';

export class Discusion{
     id: string;
     autor: string;
     titulo: string;
     contenido: string;
     //fecha: String;
     comentarios: Comentario[];

    constructor(id?, autor?, titulo?, contenido?, comentarios?){
        this.id             = id;
        this.autor          = autor;
        this.titulo         = titulo;
        this.contenido      = contenido;
        //this.fecha          = fecha;
        this.comentarios    = comentarios;
    }
/*
    public getId(): String {
        return this.id;
    }

    public setId(id: String): void {
        this.id = id;
    }

    public getAutor(): String {
        return this.autor;
    }

    public setAutor(autor: String): void {
        this.autor = autor;
    }

    public getTitulo(): String {
        return this.titulo;
    }

    public setTitulo(titulo: String): void {
        this.titulo = titulo;
    }

    public getContenido(): String {
        return this.contenido;
    }

    public setContenido(contenido: String): void {
        this.contenido = contenido;
    }

    public getFecha(): String {
        return this.fecha;
    }

    public setFecha(fecha: String): void {
        this.fecha = fecha;
    }

    public getComentarios(): Comentario[] {
        return this.comentarios;
    }

    public setComentarios(comentarios: Comentario[]): void {
        this.comentarios = comentarios;
    }
*/
}