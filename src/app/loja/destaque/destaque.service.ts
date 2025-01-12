import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

export interface PopulaCarrouselProdutoDTO {
  id: string;
  nome: string;
  preco: number;
  categoria: string;
  marca: string;
  imagemUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class DestaqueService {

  private apiUrlVelas = `${environment.apiBaseUrl}/produtos/allVelas`;
  private apiUrlVDecoradas = `${environment.apiBaseUrl}/produtos/allDecoradas`;
  private apiUrlVPerfumadas = `${environment.apiBaseUrl}/produtos/allPerfumadas`;
  private apiUrlPastilhas = `${environment.apiBaseUrl}/produtos/allPastilhas`;

  private apiUrlFragrancias = `${environment.apiBaseUrl}/produtos/allFragrancias`;
  private apiUrlAmbiente = `${environment.apiBaseUrl}/produtos/allAmbiente`;
  private apiUrlHomeSpray = `${environment.apiBaseUrl}/produtos/allHomeSpray`;
  private apiUrlAgua = `${environment.apiBaseUrl}/produtos/allAgua`;
  private apiUrlDecoracoes = `${environment.apiBaseUrl}/produtos/allDecoracoes`;
  private apiUrlPesquisa = `${environment.apiBaseUrl}/produtos/buscaProduto`;



  constructor(private http: HttpClient, private messageService: MessageService) {}

  getDadosVelas(): Observable<any>{
    return this.http.get<any>(this.apiUrlVelas);
  }
  getDadosVDecoradas(): Observable<any>{
    return this.http.get<any>(this.apiUrlVDecoradas);
  }
  getDadosPastilhas(): Observable<any>{
    return this.http.get<any>(this.apiUrlPastilhas);
  } 
  getDadosVPerfumadas(): Observable<any>{
    return this.http.get<any>(this.apiUrlVPerfumadas);
  }

  getDadosFragrancias(): Observable<any>{
    return this.http.get<any>(this.apiUrlFragrancias);
  }
  getDadosAmbiente(): Observable<any>{
    return this.http.get<any>(this.apiUrlAmbiente);
  }
  getDadosHomeSpray(): Observable<any>{
    return this.http.get<any>(this.apiUrlHomeSpray);
  }
  getDadosAgua(): Observable<any>{
    return this.http.get<any>(this.apiUrlAgua);
  }
  getDadosDecoracoes(): Observable<any>{
    return this.http.get<any>(this.apiUrlDecoracoes);
  }

  searchProdutos(id: string): Observable<any> {
    const params = new HttpParams().set('idProduto', id);
    return this.http.get<any>(this.apiUrlPesquisa, { params });
  }
}
