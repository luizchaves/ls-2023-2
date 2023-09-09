export class Company {
  static MAX_LENGTH_NAME = 0;

  constructor(name, founded, industry) {
    this.name = name;
    this.founded = founded;
    this.industry = industry;

    if (name.length > Company.MAX_LENGTH_NAME) {
      Company.MAX_LENGTH_NAME = name.length;
    }
  }

  toString() {
    return this.name.padEnd(Company.MAX_LENGTH_NAME + 2, '.') + this.founded;
  }
}

export class Companies {
  constructor() {
    this.companies = [];
  }

  add(...companies) {
    companies.forEach((company) => this.companies.push(company));
  }

  list() {
    return this.companies;
  }

  toString() {
    return this.companies.map((company) => company.toString()).join('\n');
  }
}
