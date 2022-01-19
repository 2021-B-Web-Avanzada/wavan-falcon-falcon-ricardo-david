import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  mostrarSegundoBanner = true;

  arregloUsuarios = [
    {
      id:1,
      nombre: 'Ricardo',
      color:'#00BCFF',
      link: 'https://www.facebook.com/',
      linkImagen:'https://www.cinemascomics.com/wp-content/uploads/2020/08/goku-dragon-ball-super-ultra-instinto.jpg.webp'
    },
    {
      id:2,
      nombre:'David',
      color:'#007AFF',
      link: 'https://www.epn.edu.ec/',
      linkImagen:'https://www.egames.news/__export/1629214400544/sites/debate/img/2021/08/17/vegeta.jpeg_172596871.jpeg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  cambiarOcultarBanner(){
    this.mostrarSegundoBanner =! this.mostrarSegundoBanner

  }

}
