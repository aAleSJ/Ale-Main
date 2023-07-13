import { Component } from '@angular/core';
import { Formulario1 } from '../Models-main/modelsf1/formulario1';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  store:Formulario1
  stores:Array<Formulario1>
  constructor(){
    this.store = new Formulario1();
    this.stores = new Array<Formulario1>();
  }


  ngOnIt(): void{
 }

 registro(): void{
  console.log(this.store);
  this.stores.push(this.store);
  this.store = new Formulario1();
  
  
 }
}
