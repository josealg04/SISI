import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component'
import { RegistroTutorComponent } from './Componentes/Tutor/registro-tutor/registro-tutor.component';
import { ConsultaTutorComponent } from './Componentes/Tutor/consulta-tutor/consulta-tutor.component';
import { EditarTutorComponent } from './Componentes/Tutor/editar-tutor/editar-tutor.component';
import { RegistroEstudianteComponent } from './Componentes/Estudiante/registro-estudiante/registro-estudiante.component';
import { ConsultaEstudianteComponent } from './Componentes/Estudiante/consulta-estudiante/consulta-estudiante.component';
import { EditarEstudianteComponent } from './Componentes/Estudiante/editar-estudiante/editar-estudiante.component';
import { RegistroConvocatoriaComponent } from './Componentes/Convocatoria/registro-convocatoria/registro-convocatoria.component';
import { ConsultaConvocatoriaComponent } from './Componentes/Convocatoria/consulta-convocatoria/consulta-convocatoria.component';
import { EditarConvocatoriaComponent } from './Componentes/Convocatoria/editar-convocatoria/editar-convocatoria.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../app/helpers/auth.guard';
import { Rol } from '../app/models/rol';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent/*,
    canActivate: [AuthGuard]*/
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registrotutor',
    component: RegistroTutorComponent/*,
    canActivate: [AuthGuard],
    data: { roles: [Rol.Admin] }*/
  },
  {
    path: 'consultatutor',
    component: ConsultaTutorComponent/*,
    canActivate: [AuthGuard],
    data: { roles: [Rol.Admin] }*/
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
  },
  {
    path: 'registroconvocatoria',
    component: RegistroConvocatoriaComponent
  },
  {
    path: 'consultaconvocatoria',
    component: ConsultaConvocatoriaComponent
  },
  {
    path: 'editarconvocatoria/:idConvocatoria',
    component: EditarConvocatoriaComponent
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
