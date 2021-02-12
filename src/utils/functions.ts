export const getFormattedNumbers = (numbers: number) =>
  new Intl.NumberFormat('pt-BR').format(numbers);
