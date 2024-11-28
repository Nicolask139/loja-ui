import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ContaComponent } from "./conta/conta.component";
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LojaComponent } from './loja/loja.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LojaComponent, RouterOutlet, LoginComponent, ContaComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loja-ui';
}
