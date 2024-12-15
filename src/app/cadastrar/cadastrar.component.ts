import { EnderecoService } from './endereco.service';
import { Component, OnInit } from '@angular/core';
import { ContaService } from './conta.service';
import { Endereco, Usuario } from '../cadastrar/conta';
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
  buscar: boolean = false;

  usuario: Usuario = {
    nome: '',
    apelido: '',
    email: '',
    senha: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
  };

  endereco: Endereco={
    cep: '',
    pais: '',
    estado:'',
    cidade:'',
    bairro:'',
    rua:'',
    numero: '',
    complemento: ''
  };

  constructor(
    private contaService: ContaService,
    private messageService: MessageService,
    private cepService: CepService,
    private enderecoService: EnderecoService
) {}

criarUsuario() {
  this.contaService.criarUsuario(this.usuario);
}

criarEndereco() {
  this.enderecoService.criarEndereco(this.endereco);
}

submeterFormulario(){
  this.criarUsuario();
  this.criarEndereco();
}

buscarCEP(cep: string, form: any) {
  if (cep && cep.length === 9) {
    this.cepService.consultaCEP(cep).subscribe({
      next: (dados: any) => {
        this.populaCEPForm(dados, form);
      },
      error: () => {
        this.resetaCEPForm(form);
        this.messageService.add({
          severity: 'error',
          summary: 'Atenção',
          detail: 'Erro ao buscar CEP!'
        });
      }
    });
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
