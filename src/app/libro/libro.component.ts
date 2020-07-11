import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { books } from '../books';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  books=books;
  

  constructor() { }

  ngOnInit(): void {
  }

}
