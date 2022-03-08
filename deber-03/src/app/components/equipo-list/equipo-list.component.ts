import { Component, HostBinding, OnInit } from '@angular/core';


import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  equipos: any = [];

  constructor(private equiposService: EquiposService) { }

  ngOnInit(): void {
    this.getEquipos();
  }


  getEquipos(){
    this.equiposService.getEquipos().subscribe(
      res =>{
        this.equipos = res;

      },
      err => console.error(err)
      
    );

  }

  deleteEquipo(id: string){
    this.equiposService.deleteEquipo(id).subscribe(
      res =>{
        console.log(res)
        this.getEquipos();

      },
      err => console.log(err)
    )
  }

 
}
