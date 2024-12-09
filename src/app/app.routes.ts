import { Routes } from '@angular/router';


export const routes: Routes = [
      {
        path: 'conta', 
        loadComponent: () =>
          import('./conta/conta.component').then((m) => m.ContaComponent),
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
        path: 'produto', 
        loadComponent: () =>
          import('./produto/produto.component').then((m) => m.ProdutoComponent),
      }
    ];