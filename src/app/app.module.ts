import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
//import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

//routing
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { DiscusionesComponent } from './discusiones/discusiones.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { FiltroComponent } from './filtro/filtro.component';
import { InfoComponent } from './info/info.component';
import { DetalleDiscusionComponent } from './detalle-discusion/detalle-discusion.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';


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
    LoginComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule,
    //AngularFireAuthModule,
    AngularFireStorageModule,
    RouterModule.forRoot([
      {path:'', component: InicioComponent},
      {path:'discusiones', component: DiscusionesComponent},
      {path:'asignaturas', component: AsignaturasComponent},
      {path:'filtro', component: FiltroComponent},
      {path: 'filtro/id:', component: FiltroComponent},
      {path:'info', component: InfoComponent},
      {path:'detalle-discusion', component: DetalleDiscusionComponent},
      {path:'registro', component: RegistroComponent},
      {path:'login', component: LoginComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
