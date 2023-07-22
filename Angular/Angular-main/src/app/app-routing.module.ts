import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Componentes/headerComponentes/inicio/inicio.component';
import { StoreComponent } from './Componentes/headerComponentes/store/store.component';
import { ContactosComponent } from './Componentes/headerComponentes/contactos/contactos.component';
import { AyudaComponent } from './Componentes/headerComponentes/ayuda/ayuda.component';
import { Formulario1Component } from './Componentes/Formularios/formulario1/formulario1.component';

const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'store',component:StoreComponent},
  {path:'contactos',component:ContactosComponent},
  {path:'ayuda',component:AyudaComponent},
  {path:'store/formulario1',component:Formulario1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
