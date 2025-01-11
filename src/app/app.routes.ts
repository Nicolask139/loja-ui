import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'login', 
        loadComponent: () =>
          import('./conta-l/conta-u.component').then((m) => m.ContaUComponent),
      },
      {
        path: 'cadastrar', 
        loadComponent: () =>
          import('./conta-l/cadastrar/cadastrar.component').then((m) => m.CadastrarComponent),
      },
      {
        path: '', 
        loadComponent: () =>
          import('./loja/loja.component').then((m) => m.LojaComponent),
      },
      {
        path: 'pesquisa', 
        loadComponent: () =>
          import('./loja/pesquisa/pesquisa.component').then((m) => m.PesquisaComponent),
      },
      {
        path: 'carrinho', 
        loadComponent: () =>
          import('./carrinho/carrinho.component').then((m) => m.CarrinhoComponent),
      },
      {
        path: 'produto/:id', 
        loadComponent: () =>
          import('./loja/produto/produto.component').then((m) => m.ProdutoComponent),
      },
      {
        path: 'destaque', 
        loadComponent: () =>
          import('./loja/destaque/destaque.component').then((m) => m.DestaqueComponent),
      },
      {
        path: 'vendedor', 
        loadComponent: () =>
          import('./vendedor/vendedor.component').then((m) => m.VendedorComponent),
      },
      {
        path: '*', 
        loadComponent: () =>
          import('./loja/loja.component').then((m) => m.LojaComponent),
      },
    ];