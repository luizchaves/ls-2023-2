// Representação de Investimento
// name: Tesouro Selic 2029
// value: 10050
// origin: Tesouro Nacional
// category: Pos
// date: 22/03/2023
// interest: 100% Selic

// JSON - JavaScript Object Notation
const tesouroSelic2029 = {
  name: 'Tesouro Selic 2029',
  value: 10050,
  origin: 'Tesouro Nacional',
  category: 'Pos',
  date: '11/09/2023',
  interest: '100% Selic',
};

console.log(tesouroSelic2029);

// Class Definition
class Investment {
  constructor(name, value, origin, category, date, interest) {
    this.name = name;
    this.value = value;
    this.origin = origin;
    this.category = category;
    this.date = date;
    this.interest = interest;
  }
}

const tesouroIpca2029 = new Investment(
  'Tesouro IPCA 2029',
  30990,
  'Tesouro Nacional',
  'IPCA',
  '11/09/2023',
  'IPCA + 5,26%'
);

console.log(tesouroIpca2029);

// Accessing properties
console.log(tesouroIpca2029.name);

// console.table
console.table(tesouroIpca2029);

const investments = [tesouroSelic2029, tesouroIpca2029];

console.table(investments);

// private property (#)
class InvestmentPrivate {
  #name;
  #value;
  #origin;
  #category;
  #date;
  #interest;

  constructor(name, value, origin, category, date, interest) {
    this.#name = name;
    this.#value = value;
    this.#origin = origin;
    this.#category = category;
    this.#date = date;
    this.#interest = interest;
  }
}

const tesouroIpca2029Private = new InvestmentPrivate(
  'Tesouro IPCA 2029',
  30990,
  'Tesouro Nacional',
  'IPCA',
  '11/09/2023',
  'IPCA + 5,26%'
);

console.log(tesouroIpca2029Private);

console.log(tesouroIpca2029Private.name);

// Property Shorthand { value1, value2 }
const name = 'Tesouro Selic 2029';
const value = 10050;
const origin = 'Tesouro Nacional';
const category = 'Pos';
const date = '11/09/2023';
const interest = '100% Selic';

// const investment = {
//   name: name,
//   value: value,
//   origin: origin,
//   category: category,
//   date: date,
//   interest: interest,
// };

const investment = { name, value, origin, category, date, interest };

// Spread properties { ...values, value }
const investmentBroker = {
  ...investment,
  broker: 'XP Investimentos',
};

const investmentNewValue = {
  ...investmentBroker,
  value: 11050,
};

console.log(investmentNewValue);

// Property (variable) {[key]: value}
const type = 'broker';
const bank = 'Banco Inter';

const investmentNewBroker = {
  ...investmentBroker,
  [type]: bank,
};

// JSON.stringify
console.log(JSON.stringify(investmentNewBroker));
console.log(JSON.stringify(investmentNewBroker, null, 2));

// JSON.parse
const jsonString = `
  {
    "name": "Tesouro Selic 2029",
    "value": 10050,
    "origin": "Tesouro Nacional",
    "category": "Pos",
    "date": "11/09/2023",
    "interest": "100% Selic",
    "broker": "Banco Inter"
  }
`;

const object = JSON.parse(jsonString);
