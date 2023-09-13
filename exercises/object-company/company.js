export class Company {
  static MAX_NAME_LENGTH = 0;

  constructor(name, founded, industry) {
    this.name = name;
    this.founded = founded;
    this.industry = industry;

    if (name.length > Company.MAX_NAME_LENGTH) {
      Company.MAX_NAME_LENGTH = name.length;
    }
  }

  toString() {
    const name = this.name.padEnd(Company.MAX_NAME_LENGTH + 2, '.');

    return name + this.founded;
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

  foundedAfter(year) {
    return this.companies.filter((company) => company.founded > year);
  }

  foundedBefore(year) {
    return this.companies.filter((company) => company.founded < year);
  }

  toString() {
    return this.companies.map((company) => company.toString()).join('\n');
  }
}
