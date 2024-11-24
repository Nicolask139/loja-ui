import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContaService } from './conta.service';
import { FormsModule } from '@angular/forms';
import { Usuario } from './conta';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [ButtonModule, RouterOutlet, FormsModule, InputTextModule, FloatLabelModule],
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

  