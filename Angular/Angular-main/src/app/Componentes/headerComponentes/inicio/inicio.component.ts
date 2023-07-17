import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  productos:Array<any>

  constructor(){
    this.productos= [
      {titulo:'Monito 1',descripcion:'ale1',img:'https://http2.mlstatic.com/D_NQ_NP_829339-MLA52559264640_112022-O.webp',precio:'20.000'},
      {titulo:'Monito 2',descripcion:'ale2',img:'https://http2.mlstatic.com/D_NQ_NP_829339-MLA52559264640_112022-O.webp',precio:'40.000'},
      {titulo:'Monitor 3',descripcion:'ale3',img:'https://http2.mlstatic.com/D_NQ_NP_829339-MLA52559264640_112022-O.webp',precio:'60.000'},
      {titulo:'Monitor 4',descripcion:'ale4',img:'https://http2.mlstatic.com/D_NQ_NP_829339-MLA52559264640_112022-O.webp',precio:'80.000'},
      {titulo:'Monitor 5',descripcion:'ale5',img:'https://http2.mlstatic.com/D_NQ_NP_829339-MLA52559264640_112022-O.webp',precio:'100.000'}
    ]
  }
  RegistrarProductos(){
    alert('Se agrego su Producto con Exito !!')
  }
}
