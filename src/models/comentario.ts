
export class Comentario{

     id: string;
     autor: string;
     contenido: string;
     tipo: boolean;
     perfil: string;
     comends: string[]
    

    constructor(id?: string, autor?: string, contenido?: string, tipo?: boolean, perfil?: string){
        this.id = id;
        this.autor = autor;
        this.contenido = contenido;
        this.tipo = tipo;//  discusion o resena
        this.perfil = perfil;
    }
}

