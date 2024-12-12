import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContaService } from './conta.service';
import { Usuario } from './conta';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-conta-u',
  standalone: true,
  imports: [
    PasswordModule,
    ReactiveFormsModule,
    InputMaskModule,
    ToastModule,
    ButtonModule,
    RouterOutlet,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    DividerModule,
    CommonModule,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './conta-u.component.html',
  styleUrls: ['./conta-u.component.css']
})

export class ContaUComponent {
  activeTab: number = 1;
  email: string = '';
  senha: string = '';
  erro: string = ''; 

  changeTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }

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
    private contaService: ContaService,
    private loginService: LoginService,
  ) {}

  criarUsuario() {
    this.contaService.criarUsuario(this.usuario);

  }

  realizarLogin() {
    this.loginService.login(this.email, this.senha);
  }

  
}
