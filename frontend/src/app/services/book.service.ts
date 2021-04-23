import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = 'http://localhost:4000/books';
  constructor(private httpClient: HttpClient) {
    this.getBooks();
  }

  addBook(data) {
    return this.httpClient.post(`${this.url}`, data).subscribe((data) => {
    
    });
  }

  deleteBook(id) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  getBooks() {
    return this.httpClient.get(`${this.url}`);
  }

  getBook(id){
    return this.httpClient.get(`${this.url}/${id}`);
  }

  editBook(data,id){
  return this.httpClient.put(`${this.url}/${id}`,data);
  }
}
