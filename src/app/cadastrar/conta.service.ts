import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';
import { Usuario } from './conta';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private apiUrl = `${environment.apiBaseUrl}/usuarios/cadastrar`; 

  constructor(private http: HttpClient, private messageService: MessageService) { }

  criarUsuario(usuario: Usuario) {
  
    this.http.post<{ token: string, id: string, email: string}>(this.apiUrl, usuario).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('authId', response.id);
        localStorage.setItem('authEmail', response.email);
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Usuário cadastrado com sucesso.'
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: error.error?.message || 'Erro inesperado. Tente novamente.'
        });
      },
      complete: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Finalizado',
          detail: 'Requisição concluída.'
        });
      }
    });
  }

  cadastroUsuario(usuario: any): Observable<any>{
    return this.http.post(`${this.apiUrl}`, usuario);
  }

}