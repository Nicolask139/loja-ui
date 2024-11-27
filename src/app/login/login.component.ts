import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ToastModule, RouterOutlet, FormsModule, CommonModule, FloatLabelModule, ButtonModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = '';
  senha: string = '';
  erro: string = ''; 

  constructor(private loginService: LoginService, private router: Router) {}

  realizarLogin() {
    this.loginService.login(this.email, this.senha);
  }
}