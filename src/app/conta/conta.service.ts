import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/enviroment';
import { Usuario } from "./conta"

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private apiUrl = `${environment.apiBaseUrl}/usuarios/cadastrar`; 

  constructor(private http: HttpClient) { }

  criarUsuario(usuario: Usuario) {
    this.http.post(this.apiUrl, usuario)
    .subscribe({
      next: (response) => console.log('Usuário cadastrado com sucesso:', response),
      error: (error) => console.error('Erro ao cadastrar o usuário:', error),
      complete: () => console.log('Requisição finalizada.') // Opcional
    });
  }
}
