import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent,
    RouterOutlet,
    RouterLink,
],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent {

  constructor(
    private router: Router,
    ){}

}
