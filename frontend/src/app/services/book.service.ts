import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = environment.hostUrl;
  constructor(private httpClient: HttpClient) {
    this.getBooks();
  }
//Add a book to the db
  addBook(data) {
    return this.httpClient.post(`${this.url}`, data).subscribe((data) => {
    
    });
  }
//Request to delete a specific book from the db
  deleteBook(id) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
//Request all books from the db
  getBooks() {
    return this.httpClient.get(`${this.url}`);
  }
//Requesting a specific book from the db
  getBook(id){
    return this.httpClient.get(`${this.url}/${id}`);
  }
  //Sending a request to the db to update a book 
  editBook(data,id){
  return this.httpClient.put(`${this.url}/${id}`,data);
  }
}
