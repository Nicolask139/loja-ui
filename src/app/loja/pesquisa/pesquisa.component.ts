import { PesquisaService, PopulaCarrouselProdutoDTO } from './pesquisa.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [MenuModule, InputTextModule, RouterOutlet, DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.css'
})

export class PesquisaComponent implements OnInit {
  @Input() pesquisa: string = ''; // Valor vindo do input do LojaComponent

  produtos$: Observable<any[]> = of([]); // Inicializado com um Observable vazio
  isLoading: boolean = false; // Para controle do estado de carregamento

  constructor(private pesquisaService: PesquisaService) {}

  ngOnInit(): void {
    this.produtos$ = this.pesquisaService.pesquisa$.pipe(
      debounceTime(300), // Aguarda o usuário parar de digitar por 300ms
      distinctUntilChanged(), // Evita repetição de buscas com o mesmo valor
      switchMap((pesquisa) => {
        this.isLoading = true; // Define o estado como carregando
        return this.pesquisaService.searchProdutos(pesquisa).pipe(
          catchError(() => {
            this.isLoading = false; // Caso haja erro, define como não carregando
            return of([]); // Retorna um Observable vazio para evitar que o erro propague
          })
        );
      })
    );

    this.produtos$.subscribe(() => (this.isLoading = false)); // Atualiza o estado ao final da busca
  }
}