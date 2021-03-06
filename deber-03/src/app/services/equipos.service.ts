import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Equipo} from '../models/Equipo'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }


  getEquipos(){
    return this.http.get(`${this.API_URI}/equipos`);
  }

  getEquipo(id:string){
    return this.http.get(`${this.API_URI}/equipos/${id}`);
  }

  deleteEquipo(id: string){
    return this.http.delete(`${this.API_URI}/equipos/${id}`);
  }

  saveEquipo(equipo: Equipo){
    return this.http.post(`${this.API_URI}/equipos`, equipo)

  }
  updateEquipo(id: string, updateEquipo: Equipo): Observable<Equipo>{
    return this.http.put(`${this.API_URI}/equipos/${id}`, updateEquipo)

  }

}
