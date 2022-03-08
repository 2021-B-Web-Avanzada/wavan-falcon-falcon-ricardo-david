import { Component, HostBinding, OnInit } from '@angular/core';
import { Equipo } from '../../models/Equipo';

import {ActivatedRoute, Router} from '@angular/router';

import { EquiposService } from '../../services/equipos.service';




@Component({
  selector: 'app-equipo-form',
  templateUrl: './equipo-form.component.html',
  styleUrls: ['./equipo-form.component.css']
})
export class EquipoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  equipo: Equipo ={
    id:0,
    nombre_equipo:'',
    nombre_presidente:'',
    fundacion: new Date(),
    imagen:'',
    created_ad: new Date()
    
  };

  edit: boolean = false;

  constructor(private equiposService: EquiposService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    console.log('esto es params', params)
    if (params['id']){
      this.equiposService.getEquipo(params['id'])
      .subscribe(
        res =>{
          console.log(res)
          this.equipo=res;
          this.edit=true;
        },
        err =>console.error(err)
      )

    }
  }

  saveNewEquipo(){
    delete this.equipo.created_ad;    
    delete this.equipo.id; 
   this.equiposService.saveEquipo(this.equipo)
   .subscribe(
     res =>{
       console.log(res);
       this.router.navigate(['/equipos']);

     },
     err =>console.error(err)
   )
  }

  updateEquipo(){
    delete this.equipo.created_ad; 
    const params = this.activedRoute.snapshot.params;
    var message =params['id']
    //console.log('asdasdasdasd', params['id']); 
    this.equiposService.updateEquipo(message, this.equipo)
    
   
    
    
    
   
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/equipos'])

      },
      err =>console.log(err)
    )
  }

}
