import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  lista = [];

  agregarLibro(libro){
    this.lista.push(libro);
  }

  listarLibros(){
    return this.lista;
  }

  limpiarCarrito(){
    this.lista = [];
    return this.lista;
  }
}
