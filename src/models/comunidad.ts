import { Usuario } from '../models/usuario';
import { Discusion } from '../models/discusion';

export class Comunidad{
    id: string;
    titulo: string;
    contenido: string;
    imagen: string;

    constructor(id?, titulo?, contenido?, imagen?){
        this.id = id;
        this.titulo = titulo;
        this.contenido = contenido;
        this.imagen = imagen;
    }
/*
    public getId(): String {
        return this.id;
    }

    public setId(id: String): void {
        this.id = id;
    }

    public getEstudiantes(): Usuario[] {
        return this.estudiantes;
    }

    public setEstudiantes(estudiantes: Usuario[]): void {
        this.estudiantes = estudiantes;
    }

    public getDiscusiones(): Discusion[] {
        return this.discusiones;
    }

    public setDiscusiones(discusiones: Discusion[]): void {
        this.discusiones = discusiones;
    }
*/
}