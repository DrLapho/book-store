import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = 'http://localhost:4000';
  constructor(private httpClient: HttpClient) {
    this.getBooks();
  }

  addBook(data){
    return this.httpClient.post(`${this.url}/books`, data).subscribe((data)=>{
      console.log(data)
    });

  }

  getBooks() {
    return this.httpClient.get(`${this.url}/books`);
  }
}
