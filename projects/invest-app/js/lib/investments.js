import InvestmentCard from '../components/InvestmentCard';
import Storage from '../services/storage';

function load() {
  const investments = Storage.read('investments');

  investments.forEach(InvestmentCard.create);
}

export default { load };
