import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { RegistroTutorComponent } from './Componentes/Tutor/registro-tutor/registro-tutor.component';
import { ConsultaTutorComponent } from './Componentes/Tutor/consulta-tutor/consulta-tutor.component';
import { AppRoutingModule } from './app-routing.module';
import { EditarTutorComponent } from './Componentes/Tutor/editar-tutor/editar-tutor.component';
import { RegistroEstudianteComponent } from './Componentes/Estudiante/registro-estudiante/registro-estudiante.component';
import { ConsultaEstudianteComponent } from './Componentes/Estudiante/consulta-estudiante/consulta-estudiante.component';
import { EditarEstudianteComponent } from './Componentes/Estudiante/editar-estudiante/editar-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    RegistroTutorComponent,
    ConsultaTutorComponent,
    EditarTutorComponent,
    RegistroEstudianteComponent,
    ConsultaEstudianteComponent,
    EditarEstudianteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
    ]),
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
