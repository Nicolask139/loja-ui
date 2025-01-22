import { DestaqueService } from './destaque.service';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PesquisaService } from '../pesquisa/pesquisa.service';
import { LojaComponent } from '../loja.component';
import { LojaService } from '../loja.service';
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

  pesquisa: string = '';

  activeRoute : ActivatedRoute = inject(ActivatedRoute);

  velas: any;
  velasPastilhas: any;
  velasDecoradas: any;
  velasPerfumadas: any;

  fragrancias: any;
  agua: any;
  homeSpray: any;
  ambiente: any;

  decoracoes: any;

  showBackToTop = false;
  isMenuVisibleVelas = false;
  isMenuVisibleDecoracoes = false;
  isMenuVisibleAromatizadores = false;
  velasTimeout: any;
  aromatizadoresTimeout: any; 
  decoracoesTimeout: any; 
  hideTimeout: any; 

  constructor(
    private DestaqueService: DestaqueService,
    private LojaService: LojaService,
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
  this.DestaqueService.getDadosVDecoradas().subscribe({
    next: (response) => {
      this.velasDecoradas = response; 
      
    },
    error: (err) => {
      console.error('Erro ao obter os dados:', err); 
    },
  });
  this.DestaqueService.getDadosPastilhas().subscribe({
    next: (response) => {
      this.velasPastilhas = response; 
      
    },
    error: (err) => {
      console.error('Erro ao obter os dados:', err); 
    },
  });
  this.DestaqueService.getDadosVPerfumadas().subscribe({
    next: (response) => {
      this.velasPerfumadas = response; 
      
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
  this.DestaqueService.getDadosAmbiente().subscribe({
    next: (response) => {
      this.ambiente = response; 
      
    },
    error: (err) => {
      console.error('Erro ao obter os dados:', err); 
    },
  });
  this.DestaqueService.getDadosHomeSpray().subscribe({
    next: (response) => {
      this.homeSpray = response; 
      
    },
    error: (err) => {
      console.error('Erro ao obter os dados:', err); 
    },
  });
  this.DestaqueService.getDadosAgua().subscribe({
    next: (response) => {
      this.agua = response; 
      
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

  navigateToProduto(id: string){
    console.log(id)
    this.router.navigate(['/produto',id]).then(() => {
      window.scrollTo(0,0);
    });
  }

  pesquisar(): void {
    this.LojaService.setaPesquisa(this.pesquisa); 
  }

  verLinha(linha: number){
    
    switch (linha){
      case 1:
        this.pesquisa = "Pastilhas Aromáticas"
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.pesquisar();
      break;
      case 2:
        this.pesquisa = "Velas Decoradas"
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.pesquisar();
      break;
      case 3:
        this.pesquisa = "Velas Perfumadas"
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.pesquisar();
      break;
      case 4:
        this.pesquisa = "Difusor de Ambiente"
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.pesquisar();
      break;
      case 5:
        this.pesquisa = "Home Spray"
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.pesquisar();
      break;
      case 6:
        this.pesquisa = "Água de lençol"
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.pesquisar();
      break;
      case 7:
        this.pesquisa = "Decorações"
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.pesquisar();
      break;
    }
  }
  
  toggleMenuVelas(event: MouseEvent): void {
    event.preventDefault(); 
    this.isMenuVisibleVelas = !this.isMenuVisibleVelas; 
  }
  toggleMenuAromatizadores(event: MouseEvent): void {
    event.preventDefault(); 
    this.isMenuVisibleAromatizadores = !this.isMenuVisibleAromatizadores; 
  }
  toggleMenuDecoracoes(event: MouseEvent): void {
    event.preventDefault(); 
    this.isMenuVisibleDecoracoes = !this.isMenuVisibleDecoracoes; 
  }

  closeMenuVelas(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const menu = document.querySelector('.dropdownVelas');
    const link = document.querySelector('.menuVelas');
  
    if (menu && !menu.contains(target) && target !== link) {
      this.isMenuVisibleVelas = false; 
    }
  }

  closeMenuAromatizadores(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const menu = document.querySelector('.dropdownAroma');
    const link = document.querySelector('.menuAromatizadores');
  
    if (menu && !menu.contains(target) && target !== link) {
      this.isMenuVisibleAromatizadores = false; 
    }
  }
  closeMenuDecoracoes(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const menu = document.querySelector('.dropdownDeco');
    const link = document.querySelector('.menuDecoracoes');
  
    if (menu && !menu.contains(target) && target !== link) {
      this.isMenuVisibleDecoracoes = false; 
    }
  }
  showMenuVelas(): void {
    clearTimeout(this.velasTimeout); 
    this.isMenuVisibleVelas = true; 
  }
  hideMenuVelas(): void {
    this.velasTimeout = setTimeout(() => {
      this.isMenuVisibleVelas = false; 
    }, 300);
  }
  showMenuAromatizadores(): void {
    clearTimeout(this.aromatizadoresTimeout);
    this.isMenuVisibleAromatizadores = true;
  }
  hideMenuAromatizadores(): void {
    this.aromatizadoresTimeout = setTimeout(() => {
      this.isMenuVisibleAromatizadores = false;
    }, 300);
  }
  showMenuDecoracoes(): void {
    clearTimeout(this.decoracoesTimeout);
    this.isMenuVisibleDecoracoes = true;
  }
  hideMenuDecoracoes(): void {
    this.decoracoesTimeout = setTimeout(() => {
      this.isMenuVisibleDecoracoes = false;
    }, 300);
  }
}
