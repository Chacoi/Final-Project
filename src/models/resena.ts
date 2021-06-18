import { Comentario } from 'src/models/comentario';
export class Resena{
    idResena: string;
    nombre: string;
    descripcion: string;
    puntuacion: number;

    constructor(idResena?: string, nombre?: string, descripcion?: string, puntuacion?: number){
        this.idResena = idResena;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.puntuacion = puntuacion;
    }



}