import { DestaqueService } from './destaque.service';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-destaque',
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent,     
    RouterLink,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './destaque.component.html',
  styleUrl: './destaque.component.css'
})
export class DestaqueComponent implements OnInit{

  activeRoute : ActivatedRoute = inject(ActivatedRoute);
  velas: any;
  fragrancias: any;
  artesanatos: any;
  decoracoes: any;
  showBackToTop = false;

  constructor(
    private DestaqueService: DestaqueService,
    private router: Router
  ){}

  ngOnInit(): void {

  this.DestaqueService.getDadosVelas().subscribe({
    next: (response) => {
      this.velas = response; 
      
    },
    error: (err) => {
      console.error('Erro ao obter os dados:', err); 
    },
  });

  this.DestaqueService.getDadosFragrancias().subscribe({
    next: (response) => {
      this.fragrancias = response; 
      
    },
    error: (err) => {
      console.error('Erro ao obter os dados:', err); 
    },
  });

  this.DestaqueService.getDadosArtesanatos().subscribe({
    next: (response) => {
      this.artesanatos = response; 
      
    },
    error: (err) => {
      console.error('Erro ao obter os dados:', err); 
    },
  });

  this.DestaqueService.getDadosDecoracoes().subscribe({
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
