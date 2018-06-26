import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  
}
