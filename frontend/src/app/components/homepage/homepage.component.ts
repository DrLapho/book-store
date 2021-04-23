import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../book';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  books: any;
  empty: boolean;
  constructor(private service: BookService) {}

  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.service.getBooks().subscribe((data) => {
      this.books = data;
      console.log(this.books);
      
    });
  }
}
