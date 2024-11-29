import { Component, OnInit } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClient } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [ButtonModule, TagModule, InputTextModule, RouterOutlet, ToolbarModule, AvatarModule, CarouselModule],
  templateUrl: './loja.component.html',
  styleUrl: './loja.component.css'
})
export class LojaComponent{
  responsiveOptions: any;
  produtos: any[] = []; // Lista de produtos simulados

  constructor() {
    // Mock de produtos
    this.produtos = [
      {
        id: 1,
        name: 'Camiseta Básica',
        price: 39.9,
        image: 'bamboo-watch.jpg', // Substitua por imagens reais
        inventoryStatus: 'INSTOCK'
      },
      {
        id: 2,
        name: 'Calça Jeans',
        price: 89.9,
        image: 'blue-t-shirt.jpg',
        inventoryStatus: 'LOWSTOCK'
      },
      {
        id: 3,
        name: 'Tênis Esportivo',
        price: 199.9,
        image: 'game-controller.jpg',
        inventoryStatus: 'OUTOFSTOCK'
      },
      {
        id: 4,
        name: 'Jaqueta de Couro',
        price: 299.9,
        image: 'game-controller.jpg',
        inventoryStatus: 'INSTOCK'
      },
      {
        id: 5,
        name: 'Calça Jeans',
        price: 89.9,
        image: 'blue-t-shirt.jpg',
        inventoryStatus: 'LOWSTOCK'
      },
      {
        id: 6,
        name: 'Calça Jeans',
        price: 89.9,
        image: 'blue-t-shirt.jpg',
        inventoryStatus: 'LOWSTOCK'
      },
    ];

    // Configurações responsivas para o carrossel
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getSeverity(status: string): "success" | "warning" | "danger" | undefined {
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