import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { RouterOutlet } from '@angular/router';
import { ProdutoService } from './produto.service';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [RouterOutlet, ToolbarModule, AvatarModule, CarouselModule],
  templateUrl: './loja.component.html',
  styleUrl: './loja.component.css'
})
export class LojaComponent {

}
