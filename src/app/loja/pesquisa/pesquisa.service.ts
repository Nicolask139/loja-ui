import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

export interface PopulaCarrouselProdutoDTO {
  nome: string;
  preco: number;
  categoria: string;
  marca: string;
  imagemUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
  private apiUrlPesquisa = `${environment.apiBaseUrl}/produtos/search`;

  private pesquisaSubject = new BehaviorSubject<string>(''); // Estado de pesquisa
  pesquisa$ = this.pesquisaSubject.asObservable(); // Observável para subscrição

  constructor(private http: HttpClient) {}

  searchProdutos(pesquisa: string): Observable<any> {
    const params = new HttpParams().set('pesquisa', pesquisa);
    return this.http.get<any>(this.apiUrlPesquisa, { params });
  }

  setPesquisa(pesquisa: string): void {
    this.pesquisaSubject.next(pesquisa); // Atualiza o estado de pesquisa
  }

  getPesquisa(): string {
    return this.pesquisaSubject.getValue();
  }
}
