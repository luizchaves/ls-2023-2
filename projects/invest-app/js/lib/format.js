export function formatCurrency(number) {
  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('pt-BR');
}
