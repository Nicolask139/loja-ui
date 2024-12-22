import { LojaService } from './loja.service';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { DestaqueComponent } from '../destaque/destaque.component';
import { PesquisaComponent } from "../pesquisa/pesquisa.component"; 
import { FormsModule } from '@angular/forms';

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
  inputValue: string = '';
}
