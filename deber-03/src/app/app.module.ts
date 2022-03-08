import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EquipoFormComponent } from './components/equipo-form/equipo-form.component';
import { EquipoListComponent } from './components/equipo-list/equipo-list.component';

import { EquiposService } from './services/equipos.service';
import { JugadoresListComponent } from './components/jugadores-list/jugadores-list.component';
import { JugadoresFormComponent } from './components/jugadores-form/jugadores-form.component';
import { JugadoressListComponent } from './components/jugadoress-list/jugadoress-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EquipoFormComponent,
    EquipoListComponent,
    JugadoresListComponent,
    JugadoresFormComponent,
    JugadoressListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EquiposService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
