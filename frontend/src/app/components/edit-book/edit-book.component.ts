import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Location } from '@angular/common';
import { Book } from 'src/app/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  getBookID: string;
  theBook: any;
  author: string;
  title: string;
  image: string;
  description: string;
  info: Book;

  constructor(
    private location: Location,
    private service: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  // goBack() {
  //   this.location.back();
  // }
  ngOnInit(): void {
    //getting the book id from the url 
    this.getBookID = this.activatedRoute.snapshot.paramMap.get('id');
    this.getTheBook();
  }
//Submit the edited info 
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
 //send the edited info to the service
    this.service.editBook(this.info, this.getBookID).subscribe(() => {});
    this.router.navigateByUrl('/');
  }

  //Getting one book using the book id 
  getTheBook() {
    this.service.getBook(this.getBookID).subscribe((data) => {
    this.theBook = data;
    });
  }
}
