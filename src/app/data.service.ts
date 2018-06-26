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
    // this.http.post(
    //   'http://127.0.0.1:8000/api/users', userData
    // )
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    const req = this.http.post('http://127.0.0.1:8000/api/users', userData, {headers: headers})
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
