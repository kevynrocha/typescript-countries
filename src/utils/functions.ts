export const getFormattedNumbers = (numbers: number | string) => {
  return new Intl.NumberFormat('pt-BR').format(Number(numbers));
};
