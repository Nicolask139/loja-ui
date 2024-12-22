import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestaqueService {

  private apiUrlVelas = `${environment.apiBaseUrl}/produtos/allVelas`;
  private apiUrlFragrancias = `${environment.apiBaseUrl}/produtos/allFragrancias`;
  private apiUrlArtesanatos = `${environment.apiBaseUrl}/produtos/allArtesanatos`;
  private apiUrlDecoracoes = `${environment.apiBaseUrl}/produtos/allDecoracoes`;

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getDadosVelas(): Observable<any>{
    return this.http.get<any>(this.apiUrlVelas);
  }
  getDadosFragrancias(): Observable<any>{
    return this.http.get<any>(this.apiUrlFragrancias);
  }
  getDadosArtesanatos(): Observable<any>{
    return this.http.get<any>(this.apiUrlArtesanatos);
  }
  getDadosDecoracoes(): Observable<any>{
    return this.http.get<any>(this.apiUrlDecoracoes);
  }

}
