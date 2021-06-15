import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//---------firebase-------------
import { AngularFireModule }        from '@angular/fire';
import { AngularFirestoreModule }   from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment }              from '../environments/environment';

//---------routing--------------
import { HttpClientModule } from '@angular/common/http'
import { RouterModule }     from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


//---------services--------------
import {AuthService} from './services/auth-service.service';

//---------components-----------------
import { AppComponent }               from './app.component';
import { NavbarComponent }            from './navbar/navbar.component';
import { InicioComponent }            from './inicio/inicio.component';
import { DiscusionesComponent }       from './discusiones/discusiones.component';
import { AsignaturasComponent }       from './asignaturas/asignaturas.component';
import { FiltroComponent }            from './filtro/filtro.component';
import { InfoComponent }              from './info/info.component';
import { DetalleDiscusionComponent }  from './detalle-discusion/detalle-discusion.component';
import { RegistroComponent }          from './registro/registro.component';
import { LoginComponent }             from './login/login.component';
import { CrearAsignaturaComponent }   from './crear-asignatura/crear-asignatura.component';
import { CrearDiscusionComponent } from './crear-discusion/crear-discusion.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { ListaComunidadesComponent } from './lista-comunidades/lista-comunidades.component';
import { MisComunidadesComponent } from './mis-comunidades/mis-comunidades.component';
import { ResenasComponent } from './resenas/resenas.component';
import { CrearResenaComponent } from './crear-resena/crear-resena.component';
import { ListaResenasComponent } from './lista-resenas/lista-resenas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    DiscusionesComponent,
    AsignaturasComponent,
    FiltroComponent,
    InfoComponent,
    DetalleDiscusionComponent,
    RegistroComponent,
    LoginComponent,
    CrearAsignaturaComponent,
    CrearDiscusionComponent,
    ComunidadComponent,
    ListaComunidadesComponent,
    MisComunidadesComponent,
    ResenasComponent,
    CrearResenaComponent,
    ListaResenasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    RouterModule.forRoot([
      {path:'',                   component: InicioComponent, canActivate: [AuthService]},
      {path:'discusiones',        component: DiscusionesComponent, canActivate: [AuthService]},
      {path:'asignaturas',        component: AsignaturasComponent},
      {path:'filtro',             component: FiltroComponent, canActivate: [AuthService]},
      {path: 'filtro/id:',        component: FiltroComponent},
      {path:'info',               component: InfoComponent},
      {path:'detalle-discusion',  component: DetalleDiscusionComponent},
      {path:'registro',           component: RegistroComponent},
      {path:'login',              component: LoginComponent},
      {path:'add-com',            component: CrearAsignaturaComponent},
      {path:'add-disc',           component: CrearDiscusionComponent},
      {path:'comunidad',          component: ComunidadComponent},
      {path:'lista-comunidades',  component: ListaComunidadesComponent, canActivate: [AuthService]},
      {path:'mis-comunidades',    component: MisComunidadesComponent, canActivate: [AuthService]},
      {path:'resenas',            component: ResenasComponent, canActivate: [AuthService]},
      {path:'crear-resena',       component: CrearResenaComponent, canActivate: [AuthService]},
      {path:'lista-resenas',      component: ListaResenasComponent, canActivate: [AuthService]}
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
