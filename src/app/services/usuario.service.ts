import { Injectable }                           from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Usuario }                              from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioList   : AngularFireList<any>;
  selectUsuario : Usuario = new Usuario();
  constructor(private firebase: AngularFireDatabase) {
    this.usuarioList = this.firebase.list('usuarios');
  }
  
    getUsuario(){
      return this.usuarioList = this.firebase.list('usuarios');
    }

    insertUsuario(usuario: Usuario){
      console.log(usuario);
      
      //----Inserción de datos-----
      this.usuarioList.push({
        id      : usuario.id,
        username: usuario.username,
        password: usuario.password,
        correo  : usuario.correo,
        rango   : usuario.rango, 
        rol     : usuario.rol,
      });
    }

    updateUsuario(usuario: Usuario){
      
      //---Inserción de datos----
      this.usuarioList.update(usuario.id, {
      id      : usuario.id,
      username: usuario.username,
      password: usuario.password,
      correo  : usuario.correo,
      rango   : usuario.rango, 
      rol     : usuario.rol,
      });
    }

}
