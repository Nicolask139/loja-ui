import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestaqueService {

  private apiUrlVelas = `${environment.apiBaseUrl}/produtos/allVelas`;
  private apiUrlFragrancias = `${environment.apiBaseUrl}/produtos/allFragrancias`;
  private apiUrlDecoracoes = `${environment.apiBaseUrl}/produtos/allDecoracoes`;
  private apiUrlVDecoradas = `${environment.apiBaseUrl}/produtos/allDecoradas`;
  private apiUrlVPerfumadas = `${environment.apiBaseUrl}/produtos/allPerfumadas`;
  private apiUrlVLuminarias = `${environment.apiBaseUrl}/produtos/allLuminarias`;


  constructor(private http: HttpClient, private messageService: MessageService) {}

  getDadosVelas(): Observable<any>{
    return this.http.get<any>(this.apiUrlVelas);
  }
  getDadosFragrancias(): Observable<any>{
    return this.http.get<any>(this.apiUrlFragrancias);
  }
  getDadosDecoracoes(): Observable<any>{
    return this.http.get<any>(this.apiUrlDecoracoes);
  }
  getDadosVDecoradas(): Observable<any>{
    return this.http.get<any>(this.apiUrlVDecoradas);
  }
  getDadosVLuminarias(): Observable<any>{
    return this.http.get<any>(this.apiUrlVPerfumadas);
  } 
  getDadosVPerfumadas(): Observable<any>{
    return this.http.get<any>(this.apiUrlVLuminarias);
  }
}
