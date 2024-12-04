import { LojaService } from './loja.service';
import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [
    MenuModule,
    CommonModule,
    ButtonModule,
    TagModule,
    InputTextModule,
    RouterOutlet,
    ToolbarModule,
    AvatarModule,
    CarouselModule,
    TableModule
  ],
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css'], 
})
export class LojaComponent implements OnInit {
  produtos: any[] = [];
  responsiveOptions: any;
  items: MenuItem[] | undefined;

  constructor(private LojaService: LojaService) {}

  ngOnInit(): void {
    this.items = [
      {
          label: 'Menu',
          items: [
              {
                  label: 'Finalizar cadastro!',
                  icon: 'pi pi-exclamation-circle'
              },
              {
                  label: 'Perfil',
                  icon: 'pi pi-user'
              }
          ]
        }
      ]
    this.LojaService.getDados().subscribe({
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
