import { EnderecoService } from './endereco.service';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
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
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CepService } from './cep.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

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
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent{
  buscar: boolean = false;
  mensagem: string = '';

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
    usuario: '',
    cep: '',
    estado:'',
    cidade:'',
    bairro:'',
    rua:'',
    numero: '',
    complemento: ''
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private messageService: MessageService,
    private contaService: ContaService,
    private cepService: CepService,
    private enderecoService: EnderecoService,
    private router: Router
) {}

ngOnInit(): void {
  if (isPlatformBrowser(this.platformId)) {  
    this.endereco.usuario = localStorage.getItem('authId') || '';  
    console.log(this.endereco.usuario)
  }
}

criarUsuario(){
    this.contaService.criarUsuario(this.usuario);
}

criarEndereco(){
  this.enderecoService.criarEndereco(this.endereco);
}

navigateToLoja(){
  this.router.navigate(['']);
}

cadastrar(): void {
  this.contaService.cadastroUsuario(this.usuario).subscribe({
    next: (response) => {

      this.mensagem = `Usuário cadastrado com sucesso! ID: ${response.idUsuario}`;
      console.log("Chego aqui")
      console.log(response); 
    },
    error: (err) => {
      this.mensagem = 'Erro ao cadastrar usuário.';
      console.error(err);
    }
  });
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
