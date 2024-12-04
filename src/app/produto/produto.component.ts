import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { RouterOutlet } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';   
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [
    DividerModule,
    CommonModule, 
    InputTextModule, 
    MenuModule,
    ButtonModule, 
    AccordionModule, 
    ImageModule, 
    RouterOutlet,
    PanelModule,
    SplitterModule
  ],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit{
  items: MenuItem[] | undefined;

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
  }
}
