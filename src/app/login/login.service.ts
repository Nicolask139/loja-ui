import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = `${environment.apiBaseUrl}/usuarios/login`;

  constructor(
    private http: HttpClient, 
    private messageService: MessageService,
    private router: Router) {}

  login(email: string, senha: string): void {
    const body = { email, senha };
  
    this.http.post<{ token: string, id: string, email: string}>(this.apiUrl, body).subscribe({
      next: (response) => {  
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('authId', response.id);
        localStorage.setItem('authEmail', response.email);
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Login realizado com sucesso.',
        });
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      },
      error: (error) => {   
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: error.error?.message || 'Erro inesperado. Tente novamente.',
        });
      },
    });
  }
}





