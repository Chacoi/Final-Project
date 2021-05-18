import { Comunidad } from '../models/comunidad';
import { Comentario } from '../models/comentario';

export class Asignatura{
    private sigla: String;
    private nombre: String;
    private horario: String;
    private sala: String;
    private imagen: String;
    private puntuacion: Number;
    private facultad: String;
    private carrera: String;

    private comunidades: Comunidad[];
    private comentarios: Comentario[];

    constructor(sigla?, nombre?, horario?, sala?, imagen?, puntuacion?, facultad?, carrera?, comunidades?, comentarios?){
        this.sigla = sigla;
        this.nombre = nombre;
        this.horario = horario;
        this.sala = sala;
        this.imagen = imagen;
        this.puntuacion = puntuacion;
        this.facultad = facultad;
        this.carrera = carrera;
        this.comunidades = comunidades;
        this.comentarios = comentarios;
    }

    public getSigla(): String {
        return this.sigla;
    }

    public setSigla(sigla: String): void {
        this.sigla = sigla;
    }

    public getNombre(): String {
        return this.nombre;
    }

    public setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    public getHorario(): String {
        return this.horario;
    }

    public setHorario(horario: String): void {
        this.horario = horario;
    }

    public getSala(): String {
        return this.sala;
    }

    public setSala(sala: String): void {
        this.sala = sala;
    }

    public getImagen(): String {
        return this.imagen;
    }

    public setImagen(imagen: String): void {
        this.imagen = imagen;
    }

    public getPuntuacion(): Number {
        return this.puntuacion;
    }

    public setPuntuacion(puntuacion: Number): void {
        this.puntuacion = puntuacion;
    }
    
    public getFacultad(): String {
        return this.facultad;
    }

    public setFacultad(facultad: String): void {
        this.facultad = facultad;
    }

    public getCarrera(): String {
        return this.carrera;
    }

    public setCarrera(carrera: String): void {
        this.carrera = carrera;
    }

    public getComunidades(): Comunidad[] {
        return this.comunidades;
    }

    public setComunidades(comunidades: Comunidad[]): void {
        this.comunidades = comunidades;
    }

    public getComentarios(): Comentario[] {
        return this.comentarios;
    }

    public setComentarios(comentarios: Comentario[]): void {
        this.comentarios = comentarios;
    }
}