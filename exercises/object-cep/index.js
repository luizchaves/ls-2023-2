// JSON
const cep = {
  cep: '01001-000',
  logradouro: 'Praça da Sé',
  complemento: 'lado ímpar',
  bairro: 'Sé',
  localidade: 'São Paulo',
  uf: 'SP',
  unidade: '',
  ibge: 3550308,
  gia: 1004,
};

// class
class CEP {
  constructor(
    cep,
    logradouro,
    complemento,
    bairro,
    localidade,
    uf,
    unidade,
    ibge,
    gia
  ) {
    this.cep = cep;
    this.logradouro = logradouro;
    this.complemento = complemento;
    this.bairro = bairro;
    this.localidade = localidade;
    this.uf = uf;
    this.unidade = unidade;
    this.ibge = ibge;
    this.gia = gia;
  }
}

const newCep = new CEP(
  '01001-000',
  'Praça da Sé',
  'lado ímpar',
  'Sé',
  'São Paulo',
  'SP',
  '',
  3550308,
  1004
);
