import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistroTutorComponent } from './Componentes/Tutor/registro-tutor/registro-tutor.component';
import { ConsultaTutorComponent } from './Componentes/Tutor/consulta-tutor/consulta-tutor.component';
import { ModificarTutorComponent } from './Componentes/Tutor/modificar-tutor/modificar-tutor.component';

const routes: Routes = [
  {
    path: 'registrotutor',
    component: RegistroTutorComponent
  },
  {
    path: 'consultatutor',
    component: ConsultaTutorComponent
  },
  {
    path: 'modificartutor/:cedula',
    component: ModificarTutorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
