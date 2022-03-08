import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipoListComponent } from './components/equipo-list/equipo-list.component';
import { EquipoFormComponent } from './components/equipo-form/equipo-form.component';
import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';
import { JugadoresFormComponent } from './components/jugadores-form/jugadores-form.component';
import { JugadoressListComponent } from './components/jugadoress-list/jugadoress-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/equipos',
    pathMatch: 'full'
  },
  {
    path:'equipos',
    component:EquipoListComponent
  },
  {
    path:'equipos/agregar',
    component: EquipoFormComponent
  },
  {
    path:'equipos/editar/:id',
    component: EquipoFormComponent
  },
  {
    path:'equipos/1/jugadores',
    component: JugadoresListComponent
  },
  {
    path:'equipos/1/jugadores/agregar',
    component: JugadoresFormComponent
  },
  {
    path:'equipos/1/jugadoress',
    component: JugadoressListComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
