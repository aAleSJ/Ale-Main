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
      {titulo:'Monitor Gamer',descripcion:'Monitor gamer LG UltraGear 24GN60R LCD 23.8" negro 100V/240V',img:'https://http2.mlstatic.com/D_NQ_NP_829339-MLA52559264640_112022-O.webp',precio:'$20.000'},
      {titulo:'Monitor Gamer',descripcion:'Monitor gamer LG UltraGear 24GN60R LCD 23.8" negro 100V/240V',img:'https://http2.mlstatic.com/D_NQ_NP_829339-MLA52559264640_112022-O.webp',precio:'$40.000'},
      {titulo:'Monitor Gamer',descripcion:'Monitor gamer LG UltraGear 24GN60R LCD 23.8" negro 100V/240V',img:'https://http2.mlstatic.com/D_NQ_NP_829339-MLA52559264640_112022-O.webp',precio:'$60.000'},
      {titulo:'Monitor Gamer',descripcion:'Monitor gamer LG UltraGear 24GN60R LCD 23.8" negro 100V/240V',img:'https://http2.mlstatic.com/D_NQ_NP_829339-MLA52559264640_112022-O.webp',precio:'$80.000'}
      
    ]
  }
  RegistrarProductos(){
    alert('Se agrego su Producto con Exito !!')
  }
}
