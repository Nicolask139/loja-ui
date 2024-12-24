import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
    
export class CepService {
  constructor(
    private http: HttpClient){}

    consultaCEP(cep: string) {
      if (cep !== '') {
        const validaCEP = /^[0-9]{5}-[0-9]{3}$/;
        if (validaCEP.test(cep)) {
          return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`).pipe(
            map((dados) => {
              if (dados.erro) {
                throw new Error('CEP não encontrado');
              }
              return dados;
            }),
            catchError(() => {
              throw new Error('Erro ao consultar CEP');
            })
          );
        }
      }
      return throwError(() => new Error('CEP inválido'));
    }
}
