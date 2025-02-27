import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000'; // Make sure this matches your backend URL

  constructor(private http: HttpClient) { }

  login(user: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {});
  }

}
