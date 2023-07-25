import { Component } from '@angular/core';
import { Formulario2 } from 'src/app/models/modelsF2/formulario2';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {
  formulario2:Formulario2
  formularios:Array<Formulario2>

  constructor(){
    this.formulario2=new Formulario2();
    this.formularios= new Array<Formulario2>();
  }

  registrar(){
    console.log(this.formulario2)
    this.formularios.push(this.formulario2)
    this.formulario2 = new Formulario2()
    

  }
}
