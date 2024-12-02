import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  private apiUrl = `${environment.apiBaseUrl}/produtos/carrosel`;

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getDados(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

}
