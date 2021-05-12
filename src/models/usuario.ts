

export class Usuario{
    private id: String;
    private username: String;
    private nombre: String;
    private rango: String;
    private rol: String;

    


    constructor(id, username, nombre, rango, rol){
        this.id = id;
        this.username = username;
        this.nombre = nombre;
        this.rango = rango;
        this.rol = rol;
    }

    public getId(): String {
        return this.id;
    }

    public setId(id: String): void {
        this.id = id;
    }

    public getUsernaem(): String {
        return this.username;
    }

    public setUsernaem(usernaem: String): void {
        this.username = usernaem;
    }

    public getNombre(): String {
        return this.nombre;
    }

    public setNombre(nombre: String): void {
        this.nombre = nombre;
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