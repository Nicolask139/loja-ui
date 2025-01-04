import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})

export class VendedorService {

  private apiUrl = `${environment.apiBaseUrl}/produtos/criarProduto`;

  constructor(
    private http: HttpClient, 
    private messageService: MessageService,
  ) {}

  criarProduto(produto: Produto) {
    console.log(produto);
    this.http.post(this.apiUrl, produto).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Produto cadastrado com sucesso.'
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
