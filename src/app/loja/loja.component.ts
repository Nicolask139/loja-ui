import { LojaService } from './loja.service';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css'], 
})
export class LojaComponent implements OnInit {

  activeRoute : ActivatedRoute = inject(ActivatedRoute);
  produtos: any;
  showBackToTop = false;

  constructor(private LojaService: LojaService) {}

  ngOnInit(): void {

    this.activeRoute.fragment.subscribe((data: string | null) => {
    this.JumpToSection(data);
    });

    this.LojaService.getDados().subscribe({
      next: (response) => {
        this.produtos = response; 
        
      },
      error: (err) => {
        console.error('Erro ao obter os dados:', err); 
      },
    });
  }

  JumpToSection(section: string | null): void {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
    this.showBackToTop = scrollPosition > 100; 
  }
  
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
