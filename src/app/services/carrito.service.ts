import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  listaFormatoCarrito;
  lista = [];

  agregarLibro(libro){
    let cantidad = 1;
    let estaEnLista = false;

    

    this.lista.forEach( (elemento) => {
      if( elemento.id == libro.id)
        elemento.cantidad += 1;
        estaEnLista = true;
        console.log()
    });

    if( !estaEnLista ){
      this.listaFormatoCarrito = {
        "nombre": libro.nombre,
        "precio": libro.precio,
        "cantidad": cantidad
      };
      this.lista.push(this.listaFormatoCarrito);
    }
    

  }

  listarLibros(){
    return this.lista;
  }

  limpiarCarrito(){
    this.lista = [];
    return this.lista;
  }

  removerLibro(libro){
    this.lista.splice( this.lista.indexOf(libro.id) , 1 );
  }
}
