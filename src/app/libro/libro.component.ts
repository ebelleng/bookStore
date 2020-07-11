import { Component, OnInit } from '@angular/core';
import { books } from '../books';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  books=books;
  id: Number;
  book: any;

  constructor(private _route: ActivatedRoute) { 
    this.id = +this._route.snapshot.paramMap.get('id');
    this.book = books.find(x => x.id == this.id);
  }

  ngOnInit(): void {
  }

}
