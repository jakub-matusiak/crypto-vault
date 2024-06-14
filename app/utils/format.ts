export function formatCurrency(currency: string) {
  const parsedCurrency = parseFloat(currency);

  const formattedCurrency = parsedCurrency.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedCurrency;
}

export function formatPercentage(percentage: string) {
  const parsedPercentage = parseFloat(percentage) / 100;

  const formattedPercentage = parsedPercentage.toLocaleString('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedPercentage;
}

export function formatNumber(number: string) {
  const parsedNumber = parseFloat(number);

  const formattedNumber = parsedNumber.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber;
}
