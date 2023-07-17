import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/layout/header/header.component';
import { CuerpoComponent } from './Componentes/layout/cuerpo/cuerpo.component';
import { FooterComponent } from './Componentes/layout/footer/footer.component';
import { InicioComponent } from './Componentes/headerComponentes/inicio/inicio.component';
import { StoreComponent } from './Componentes/headerComponentes/store/store.component';
import { ContactosComponent } from './Componentes/headerComponentes/contactos/contactos.component';
import { AyudaComponent } from './Componentes/headerComponentes/ayuda/ayuda.component';
import { FormsModule } from '@angular/forms';
import { Formulario1Component } from './Componentes/Formularios/formulario1/formulario1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuerpoComponent,
    FooterComponent,
    InicioComponent,
    StoreComponent,
    ContactosComponent,
    AyudaComponent,
    Formulario1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
