import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'contau', 
        loadComponent: () =>
          import('./conta-l/conta-u.component').then((m) => m.ContaUComponent),
      },
      {
        path: '', 
        loadComponent: () =>
          import('./loja/loja.component').then((m) => m.LojaComponent),
      },
      {
        path: 'pesquisa', 
        loadComponent: () =>
          import('./pesquisa/pesquisa.component').then((m) => m.PesquisaComponent),
      },
      {
        path: 'carrinho', 
        loadComponent: () =>
          import('./carrinho/carrinho.component').then((m) => m.CarrinhoComponent),
      },
      {
        path: 'produto', 
        loadComponent: () =>
          import('./produto/produto.component').then((m) => m.ProdutoComponent),
      },
    ];