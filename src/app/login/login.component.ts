import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  usuarioList: Usuario[];
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    return this.usuarioService.getUsuario()
    .snapshotChanges().subscribe(item =>{
      this.usuarioList = [];
      item.forEach(element =>{
        let x = JSON.parse(JSON.stringify(element.payload));
        x["id"] = element.key;
        this.usuarioList.push(x as Usuario);
      });
    });
  }

  onSearch(usuario: Usuario, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    this.usuarioList.forEach(element => {
      console.log("Analizando elemento..."+element);
      if(element.username == usuario.username){
        console.log("Elemento encontrado");
        this.router.navigate(['/discusiones'], { queryParams: { returnUrl: state.url }});
        return true;
      }
    });
    return false;
  }

  onLogin(usuario: Usuario){

  }
}
