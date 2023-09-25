import { investments } from './data.js';
import InvestmentCard from './components/InvestmentCard.js';

const cards = investments
  .map((investment) => InvestmentCard(investment))
  .join('');

const investmentsGrid = document.querySelector('.investments');

investmentsGrid.innerHTML = cards;

const newInvestment = {
  id: 1,
  name: 'CDB Banco Inter',
  value: 5000,
  origin: 'Banco Inter',
  category: 'Pos',
  created_at: '2023-09-20',
  interest: '100% CDI',
};

investmentsGrid.insertAdjacentHTML('beforeend', InvestmentCard(newInvestment));
