import { Component } from '@angular/core';
import { Formulario2 } from '../Models-main/modelsf2/formulario2';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {
  
  formularioo:Formulario2;
  formularioos:Array<Formulario2>;

  constructor(){
    this.formularioo = new Formulario2();
    this.formularioos = new Array<Formulario2>();
   }  
  ngOinIt():void{
    
  }

  registro(){
    console.log(this.formularioo);
    this.formularioos.push(this.formularioo);
    this.formularioo = new Formulario2();
  }
}
