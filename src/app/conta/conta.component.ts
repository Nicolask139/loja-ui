import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContaService } from './conta.service';
import { Usuario } from './conta';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [PasswordModule, DividerModule, ReactiveFormsModule, InputMaskModule, RippleModule, ToastModule, ButtonModule, RouterOutlet, FormsModule, InputTextModule, FloatLabelModule],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})

export class ContaComponent{
  usuario: Usuario = {
    nome: '',
    apelido: '',
    email: '',
    senha: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
  };


  constructor(
    private contaService: ContaService
  ) {}

  criarUsuario() {
    this.contaService.criarUsuario(this.usuario);

  }
}


  