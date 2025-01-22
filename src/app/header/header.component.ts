import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastModule } from 'primeng/toast';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { LojaService } from '../loja/loja.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToastModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  private apiUrl = `${environment.apiBaseUrl}/usuarios/validate-token`;
  pesquisa: string= '';

  constructor(
    private http: HttpClient, 
    private router: Router,
    private messageService: MessageService,
    private LojaService: LojaService
  ){}

  pesquisar(): void {
    this.LojaService.setaPesquisa(this.pesquisa); 
  }

  navigateToLoja(){
    this.pesquisar();
    this.router.navigate(['']);
  }
  navigateToConta(){
    this.router.navigate(['/contau']);
  }

  navigateToCarrinho(){
    this.router.navigate(['/carrinho']);
  }

  checkAuthTokenAndAccess(): void {
    const storedToken = localStorage.getItem('authToken');
  
    if (!storedToken) {
      this.messageService.add({
        severity: 'error',
        summary: 'Acesso Negado',
        detail: 'Faça login para acessar o carrinho.',
      });
      return;
    }
  
    this.http.post<{ valid: boolean }>(`${this.apiUrl}`, null, {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    }).subscribe({
      next: (response) => {
        if (response.valid) {
          this.navigateToCarrinho();
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Token Inválido',
            detail: 'Faça login novamente.',
          });
        }
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'O token foi manipulado, refaça o login',
        });
      },
    });
  }
}