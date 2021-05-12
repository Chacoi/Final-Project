import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignaturasModule } from '../asignaturas/asignaturas.module';
import { DiscusionesModule } from '../discusiones/discusiones.module';



@NgModule({
  declarations: [
    AsignaturasModule,
    DiscusionesModule
  ],
  imports: [
    CommonModule,
    AsignaturasModule,
    DiscusionesModule
  ]
})
export class InicioModule { }
