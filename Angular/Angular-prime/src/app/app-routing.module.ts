import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { StoreComponent } from './components/store/store.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'store',component:StoreComponent},
  {path:'contactos',component:ContactosComponent},
  {path:'ayuda',component:AyudaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
