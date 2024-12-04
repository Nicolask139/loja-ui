import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '', 
        loadComponent: () =>
          import('./login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'conta', 
        loadComponent: () =>
          import('./conta/conta.component').then((m) => m.ContaComponent),
      },
      {
        path: 'loja', 
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
      },
      { path: '**', redirectTo: '' }, 
    ];