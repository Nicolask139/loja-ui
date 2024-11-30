import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  private apiUrl = `${environment.apiBaseUrl}/produtos/carrosel`;

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getDados(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

}
