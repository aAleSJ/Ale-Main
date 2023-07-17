import { Component } from '@angular/core';
import { Formulario1 } from 'src/app/models/modelsF1/formulario1';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component {

  formulario1:Formulario1;
  formularios:Array<Formulario1>;

  constructor(){
    this.formulario1 = new Formulario1();
    this.formularios = new Array<Formulario1>();
  }

  registrar(){
    console.log(this.formulario1)
    this.formularios.push(this.formulario1);
    this.formulario1 = new Formulario1();
  }


  ngOnInite():void{

  }
  
}
