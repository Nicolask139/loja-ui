import { LojaService } from './loja.service';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';

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
  velas: any;
  fragrancias: any;
  artesanatos: any;
  decoracoes: any;
  showBackToTop = false;

  constructor(
    private LojaService: LojaService,
    private router: Router
  ){}

  ngOnInit(): void {

  this.LojaService.getDadosVelas().subscribe({
    next: (response) => {
      this.velas = response; 
      
    },
    error: (err) => {
      console.error('Erro ao obter os dados:', err); 
    },
  });

  this.LojaService.getDadosFragrancias().subscribe({
    next: (response) => {
      this.fragrancias = response; 
      
    },
    error: (err) => {
      console.error('Erro ao obter os dados:', err); 
    },
  });

  this.LojaService.getDadosArtesanatos().subscribe({
    next: (response) => {
      this.artesanatos = response; 
      
    },
    error: (err) => {
      console.error('Erro ao obter os dados:', err); 
    },
  });

  this.LojaService.getDadosDecoracoes().subscribe({
    next: (response) => {
      this.decoracoes = response; 
      
    },
    error: (err) => {
      console.error('Erro ao obter os dados:', err); 
    },
  });

    this.activeRoute.fragment.subscribe((data: string | null) => {
    this.JumpToSection(data);
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

  navigateToProduto(){
    this.router.navigate(['/produto']).then(() => {
      window.scrollTo(0,0);
    });
  }
}
