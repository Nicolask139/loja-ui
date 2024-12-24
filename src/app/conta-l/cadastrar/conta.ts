export interface Usuario {
  nome: string ;
  apelido: string ;
  email: string ;
  senha: string ;
  dataNascimento: string;
  cpf: string ;
  telefone: string ;
}

export interface Endereco{
  usuario: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
}
                             