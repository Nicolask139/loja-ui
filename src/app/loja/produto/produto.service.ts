import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/enviroment';

export interface PopulaCarrouselProdutoDTO {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  marca: string;
  imagemUrl: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

    private apiUrlPesquisa = `${environment.apiBaseUrl}/produtos/buscaProduto`;
    constructor(private http: HttpClient) {}

    searchProdutos(id: string): Observable<any> {
      const params = new HttpParams().set('idProduto', id);
      return this.http.get<any>(this.apiUrlPesquisa, { params });
    }
}
