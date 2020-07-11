import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Top10productosComponent } from './top10productos/top10productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InicioComponent } from './inicio/inicio.component';
import { LibroComponent } from './libro/libro.component';




const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'categorias', component: CategoriaComponent },
  { path: 'categorias/:categoria', component: CategoriaComponent},
  { path: 'top10', component: Top10productosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'carrito/:id', component: CarritoComponent },
  { path: 'libros', component: LibroComponent},
  { path: 'libros/:id', component: LibroComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
