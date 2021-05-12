import { Usuario } from '../models/usuario';
import { Discusion } from '../models/discusion';

export class Comunidad{
    private id: String;
    private estudiantes: Usuario[];
    private discusiones: Discusion[];

    constructor(id, estudiantes, discusiones){
        this.id = id;
        this.estudiantes = estudiantes;
        this.discusiones = discusiones;
    }

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

}