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
  cep: string;
  pais: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
}
                             