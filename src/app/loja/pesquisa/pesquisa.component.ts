import { PesquisaService, PopulaCarrouselProdutoDTO } from './pesquisa.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';


@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [
    MenuModule, 
    InputTextModule, 
    RouterOutlet, 
    DataViewModule, 
    ButtonModule, 
    TagModule, 
    CommonModule],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})

export class PesquisaComponent implements OnChanges {
  [x: string]: any;
  @Input() pesquisa: string = ''; 

  produtos$: Observable<any[]> = of([]); 
  isLoading: boolean = false;

  constructor(
    private pesquisaService: PesquisaService,
    private router: Router  
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Sempre que o valor de pesquisa for alterado (de outro componente ou input)
    if (changes['pesquisa'] && changes['pesquisa'].currentValue !== changes['pesquisa'].previousValue) {
      this.pesquisaService.setPesquisa(this.pesquisa);  // Atualiza o serviço com o novo valor de pesquisa
    }
  }

  ngOnInit(): void {
    this.produtos$ = this.pesquisaService.pesquisa$.pipe(
      debounceTime(300), 
      distinctUntilChanged(), 
      switchMap((pesquisa) => {
        this.isLoading = true; 
        return this.pesquisaService.searchProdutos(pesquisa).pipe(
          catchError(() => {
            this.isLoading = false;
            return of([]); 
          })
        );
      })
    );

    this.produtos$.subscribe(() => (this.isLoading = false));
  }

  navigateToProduto(id: string){
    console.log(id)
    this.router.navigate(['/produto', id]);
  }
}