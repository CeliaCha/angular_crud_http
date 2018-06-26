import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<Object> {
    return this.http.get<Object>('http://127.0.0.1:8000/api/users')
  }
  getUser(userId): Observable<Object> {
    return this.http.get<Object>('http://127.0.0.1:8000/api/users/'+userId)
  }
  getPosts() {
    return this.http.get<Object>('https://jsonplaceholder.typicode.com/posts')
  }
  addUser(userData : Object): void {
    console.log('log dataservice')
    // const headers = new HttpHeaders();
    // headers.set('Content-Type', 'application/json; charset=utf-8');
    const req = this.http.post('http://127.0.0.1:8000/api/users', userData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
  updateUser(userId : Number, userData : Object):void {
    let url = 'http://127.0.0.1:8000/api/users/'+userId;
    this.http
    .put(url, userData)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
  deleteUser(userId : Number):void {
    let url = 'http://127.0.0.1:8000/api/users/'+userId;
    this.http
    .delete(url)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
  
}
