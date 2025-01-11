import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit {
  produtoId: any  = "";
  produto: any;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ){}

  ngOnInit(): void {
    this.produtoId = this.route.snapshot.paramMap.get('id');
    console.log('ID do Produto:', this.produtoId);
    this.produtoService.searchProdutos(this.produtoId).subscribe({
      next: (response) => {
        this.produto = response; 
        
      },
      error: (err) => {
        console.error('Erro ao obter os dados:', err); 
      },
    });
  }
}

