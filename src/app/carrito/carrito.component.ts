import { Component, OnInit } from '@angular/core';
import { books } from '../books';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  titulo = "Carrito de compras";
  listaLibros: Array<any>;
  
  constructor(private carritoService:CarritoService, private _route: ActivatedRoute) { }
  
  ngOnInit() {
    this.listaLibros = this.carritoService.listarLibros();
  }

  removerLibro(book: any){
    this.listaLibros.splice( this.listaLibros.indexOf(book) , 1);
  }
}
