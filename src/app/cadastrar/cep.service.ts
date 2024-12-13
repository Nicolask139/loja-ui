import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
    
export class CepService {
  constructor(
    private http: HttpClient){}

    consultaCEP(cep: string){
      if(cep !== ''){
        const validaCEP = /^[0-9]{8}$/;
        if(validaCEP.test(cep)){
          return this.http.get(`viacep.com.br/ws/${cep}/json/`)
        }
      }
      return of({});
    }

}
