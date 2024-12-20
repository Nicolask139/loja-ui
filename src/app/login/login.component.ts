import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router, RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
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
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  erro: string = ''; 

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}
  realizarLogin() {
    this.loginService.login(this.email, this.senha);
  }
}
