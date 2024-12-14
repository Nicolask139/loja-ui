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
      console.log(cep)
      if(cep !== ''){
        const validaCEP = /^[0-9]{5}-[0-9]{3}$/;
        if(validaCEP.test(cep)){
          console.log("oi")
          return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
        }
      }
      return of({});
    }
}
