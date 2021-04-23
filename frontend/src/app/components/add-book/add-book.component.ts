import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  author: string;
  title: string;
  image: string;
  description: string;
  info: Book;

  constructor(private location: Location, private service: BookService,private router:Router) {}

  // goBack() {
  //   this.location.back();
  // }
  ngOnInit(): void {}

  onSubmit(data: NgForm) {
    this.title = data.value.title;
    this.author = data.value.author;
    this.image = data.value.image;
    this.description = data.value.description;

    this.info = {
      Title: this.title,
      Author: this.author,
      Description: this.description,
      image: this.image,
    };
    this.service.addBook(this.info);
    this.router.navigateByUrl('/');
  }
}
