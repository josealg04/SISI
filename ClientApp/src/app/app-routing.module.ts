import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistroTutorComponent } from './Componentes/Tutor/registro-tutor/registro-tutor.component';
import { ConsultaTutorComponent } from './Componentes/Tutor/consulta-tutor/consulta-tutor.component';
import { EditarTutorComponent } from './Componentes/Tutor/editar-tutor/editar-tutor.component';
import { RegistroEstudianteComponent } from './Componentes/Estudiante/registro-estudiante/registro-estudiante.component';
import { ConsultaEstudianteComponent } from './Componentes/Estudiante/consulta-estudiante/consulta-estudiante.component';
import { EditarEstudianteComponent } from './Componentes/Estudiante/editar-estudiante/editar-estudiante.component';

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
    path: 'editartutor/:cedula',
    component: EditarTutorComponent
  },
  {
    path: 'registroestudiante',
    component: RegistroEstudianteComponent
  },
  {
    path: 'consultaestudiante',
    component: ConsultaEstudianteComponent
  },
  {
    path: 'editarestudiante/:cedula',
    component: EditarEstudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
