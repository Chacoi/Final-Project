

export class Usuario{
    id      : string;
    username: string;
    password: string;
    correo  : string;
    rango   : string;
    rol     : string;
    comunidades: string[];

    


    constructor(id?: string, username?: string, password?: string, correo?: string, rango?: string, rol?: string){
        this.id         = id;
        this.username   = username;
        this.password   = password;
        this.correo     = correo;
        this.rango      = rango;
        this.rol        = rol;
        this.comunidades= [];
    }
}