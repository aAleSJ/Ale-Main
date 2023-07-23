import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  registro:Array<any>

  constructor(){
    this.registro = [
      {titulo:'Carrera de Informatica',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum sint repudiandae similique iure deleniti beatae  amet',img:'https://statics.qrnuevaeconomia.com/2022/08/crop/6307b0e42a756__1050x560.webp'},
      {titulo:'Carrera de Robotica',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum sint repudiandae similique iure deleniti beatae  amet',img:'https://statics.qrnuevaeconomia.com/2022/08/crop/6307b0e42a756__1050x560.webp'},
      {titulo:'Carrera de Electricista',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum sint repudiandae similique iure deleniti beatae  amet',img:'https://statics.qrnuevaeconomia.com/2022/08/crop/6307b0e42a756__1050x560.webp'},
      {titulo:'Carrera de Musica',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum sint repudiandae similique iure deleniti beatae  amet',img:"https://statics.qrnuevaeconomia.com/2022/08/crop/6307b0e42a756__1050x560.webp"}
    ]
  }
}
