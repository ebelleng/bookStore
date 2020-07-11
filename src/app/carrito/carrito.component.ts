import { Component, OnInit } from '@angular/core';
import { books } from '../books';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  titulo = "Carrito de compras";
  listaCarrito: { 
    id: Number,
    cantidad: Number
   };

  constructor(private _route: ActivatedRoute) {    
    this.listaCarrito.id = 0;
    this.listaCarrito.cantidad = 0;
  }

  ngOnInit(): void {
  }

}
