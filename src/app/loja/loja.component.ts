import { LojaService } from './loja.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css'], 
})
export class LojaComponent implements OnInit {
  produtos: any;


  constructor(private LojaService: LojaService) {}

  ngOnInit(): void {
    this.LojaService.getDados().subscribe({
      next: (response) => {
        this.produtos = response; 
        
      },
      error: (err) => {
        console.error('Erro ao obter os dados:', err); 
      },
    });
  }
}
