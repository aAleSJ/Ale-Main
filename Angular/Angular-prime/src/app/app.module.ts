import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CuerpoComponent } from './components/layout/cuerpo/cuerpo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { StoreComponent } from './components/store/store.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CuerpoComponent,
    InicioComponent,
    StoreComponent,
    ContactosComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
