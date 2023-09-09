import { Companies, Company } from './company.js';

const companies = new Companies();

companies.add(
  new Company('Amazon', 1994, ['E-Commerce', 'Cloud']),
  new Company('Facebook', 2004, ['Social']),
  new Company('Alphabet Inc.', 2015, ['Search', 'Cloud', 'Advertising'])
);

console.log(companies.list());
