import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriaComponent } from './categoria/categoria.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { ContactoComponent } from './contacto/contacto.component';
import { Top10productosComponent } from './top10productos/top10productos.component';
import { LibroComponent } from './libro/libro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriaComponent,
    ContactoComponent,
    Top10productosComponent,
    LibroComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
