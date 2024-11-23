import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContaService } from './conta.service';
import { FormsModule } from '@angular/forms';
import { Usuario } from './conta';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})

export class ContaComponent {
  usuario: Usuario = {
    nome: '',
    apelido: '',
    email: '',
    senha: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
  };

  constructor(private contaService: ContaService) {}

  criarUsuario() {
    this.contaService.criarUsuario(this.usuario);
  }
}

  