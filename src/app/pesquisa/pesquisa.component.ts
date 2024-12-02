import { PesquisaService } from './pesquisa.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [InputTextModule, RouterOutlet, DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})
export class PesquisaComponent implements OnInit{
  produtos: any[] = [];
  responsiveOptions: any;

  constructor(private pesquisaService: PesquisaService) {}

  ngOnInit(): void {
    this.pesquisaService.getDados().subscribe({
      next: (response) => {
        this.produtos = response; 
      },
      error: (err) => {
        console.error('Erro ao obter os dados:', err); 
      },
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767x',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string): 'success' | 'warning' | 'danger' | undefined {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;
    }
  }
}
