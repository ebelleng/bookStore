import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { LibroComponent } from './libro/libro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Top10productosComponent } from './top10productos/top10productos.component';

// Material Design
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './inicio/inicio.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CarritoComponent } from './carrito/carrito.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriaComponent,
    ContactoComponent,
    Top10productosComponent,
    CarritoComponent,
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
    NgbModule,
    MatSidenavModule,
    MatFormFieldModule,
    LayoutModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
