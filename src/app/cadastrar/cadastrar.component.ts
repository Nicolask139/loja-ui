import { Component, OnInit } from '@angular/core';
import { ContaService } from './conta.service';
import { Usuario } from '../cadastrar/conta';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { CepService } from './cep.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [
    PasswordModule,
    ReactiveFormsModule,
    InputMaskModule,
    ToastModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    DividerModule,
    CommonModule
],
  providers: [MessageService],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent{
  usuario: Usuario = {
    nome: '',
    apelido: '',
    email: '',
    senha: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
  };
  buscacep: string = '';
  buscar: boolean = false;


  constructor(
    private contaService: ContaService,
    private messageService: MessageService,
    private cepService: CepService
) {}

criarUsuario() {
  this.contaService.criarUsuario(this.usuario);
}

buscarCEP(buscacep: any, form: any){
  if(buscacep !== null&& buscacep!== '' && buscacep>= 8){
    this.cepService.consultaCEP(buscacep).subscribe({
      next: (dados: any) => {
        this.buscar = true;
        setTimeout(()=>{
          this.populaCEPForm(dados,form);
        },100);
      },
      error:(e:any) => {
        this.resetaCEPForm(form);
        this.buscar = false;
        this.messageService.add({
          severity:'error',
          summary:'Atenção',
          detail: 'Erro ao buscar CEP!'
        });
      }
    })
  }
}

populaCEPForm(dados: any, formulario: any){
  formulario.form.patchValue({
    estado: dados.estado,
    cidade: dados.localidade,
    bairro: dados.bairro,
    rua: dados.logradouro
  })
}

resetaCEPForm(formulario: any){
  formulario.form.patchValue({
    estado: null,
    cidade: null,
    bairro: null,
    rua: null
  })
  this.buscar = false;
}





}
