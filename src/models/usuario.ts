

export class Usuario{
    private id: string;
    private username: String;
    private correo: String;
    private rango: String;
    private rol: String;

    


    constructor(id, username, correo, rango, rol){
        this.id = id;
        this.username = username;
        this.correo = correo;
        this.rango = rango;
        this.rol = rol;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getUsernaem(): String {
        return this.username;
    }

    public setUsernaem(usernaem: String): void {
        this.username = usernaem;
    }

    public getCorreo(): String {
        return this.correo;
    }

    public setCorreo(correo: String): void {
        this.correo = correo;
    }

    public getRango(): String {
        return this.rango;
    }

    public setRango(rango: String): void {
        this.rango = rango;
    }
    public getRol(): String {
        return this.rol;
    }

    public setRol(rol: String): void {
        this.rol = rol;
    }
}