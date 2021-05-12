
export class Comentario{
    private id: String;
    private autor: String;
    private contenido: String;
    private tipo: Boolean;
    private perfil: String;
    

    constructor(id, autor, contenido, tipo, perfil){
        this.id = id;
        this.autor = autor;
        this.contenido = contenido;
        this.tipo = tipo;//  discusion o resena
        this.perfil = perfil;
    }

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

    public getContenido(): String {
        return this.contenido;
    }

    public setContenido(contenido: String): void {
        this.contenido = contenido;
    }

    public isTipo(): Boolean {
        return this.tipo;
    }

    public setTipo(tipo: Boolean): void {
        this.tipo = tipo;
    }

    public getPerfil(): String {
        return this.perfil;
    }

    public setPerfil(perfil: String): void {
        this.perfil = perfil;
    }
}

