import { MessageService } from 'primeng/api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';
import { Usuario } from "./conta"

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private apiUrl = `${environment.apiBaseUrl}/usuarios/cadastrar`; 

  constructor(private http: HttpClient, private messageService: MessageService) { }

  criarUsuario(usuario: Usuario) {
    this.http.post(this.apiUrl, usuario).subscribe({
      next: () => {
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
}