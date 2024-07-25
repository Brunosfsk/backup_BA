Number.prototype.toCurrency = function () {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(this);
};
