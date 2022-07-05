import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ColaboradoresComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ColaboradoresComponent
  ]
})
export class EmployeesModule { }
