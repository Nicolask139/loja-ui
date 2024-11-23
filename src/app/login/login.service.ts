import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.apiBaseUrl}/usuarios/login`;

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    const body = { email, senha }; 
    return this.http.post(this.apiUrl, body); // 
  }
}
