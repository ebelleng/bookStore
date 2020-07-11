import { Component, OnInit } from '@angular/core';
import { books } from '../books';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  listaCategorias: string[];
  listaLibros: Array<any>;
  categoriaSeleccionada: string;

  constructor(private _route: ActivatedRoute) { 
    this.categoriaSeleccionada = this._route.snapshot.paramMap.get('categoria');
    this.listaCategorias = [];
    this.listaLibros = [];
    
    for(let i=0 ; i< books.length; i++){
      this.listaCategorias.push(books[i].genero);
    }
  }

  ngOnInit(): void {
    for(let i=0; i<books.length; i++){
      if( books[i].genero == this.categoriaSeleccionada ){
        this.listaLibros.push(books[i]);
      }
      
    }
    
  }

}
