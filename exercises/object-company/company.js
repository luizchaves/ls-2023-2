export class Company {
  constructor(name, founded, industry) {
    this.name = name;
    this.founded = founded;
    this.industry = industry;
  }

  toString(nameMaxLength = 20) {
    return this.name.padEnd(nameMaxLength, '.') + this.founded;
  }
}

export class Companies {
  constructor() {
    this.companies = [];
    this.nameMaxLength = 0;
  }

  add(...companies) {
    companies.forEach((company) => {
      this.companies.push(company);

      if (company.name.length > this.nameMaxLength) {
        this.nameMaxLength = company.name.length;
      }
    });
  }

  list() {
    return this.companies
      .map((company) => company.toString(this.nameMaxLength + 2))
      .join('\n');
  }
}
