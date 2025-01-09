import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { DestaqueComponent } from './destaque/destaque.component';
import { PesquisaComponent } from "./pesquisa/pesquisa.component"; 
import { FormsModule } from '@angular/forms';
import { PesquisaService } from './pesquisa/pesquisa.service';

@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    DestaqueComponent,
    PesquisaComponent,
    FormsModule
],
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css'], 
})
export class LojaComponent {
    pesquisa: string = ''; // Valor do input
  
    constructor(private pesquisaService: PesquisaService) {}
  
    onInputChange(pesquisa: string): void {
      this.pesquisa = pesquisa; // Atualiza o valor local
      this.pesquisaService.setPesquisa(pesquisa); // Atualiza o valor no serviço
    }
  }
  