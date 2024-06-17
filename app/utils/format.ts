export function formatCurrency(currency: string) {
  if (!currency) return '-';

  const parsedCurrency = parseFloat(currency);

  const formattedCurrency = parsedCurrency.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedCurrency;
}

export function formatPercentage(percentage: string, plusSign = false) {
  if (!percentage) return '-';

  const parsedPercentage = parseFloat(percentage) / 100;

  const formattedPercentage = parsedPercentage.toLocaleString('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return plusSign && parsedPercentage > 0 ? `+${formattedPercentage}` : formattedPercentage;
}

export function formatNumber(number: string) {
  if (!number) return '-';

  const parsedNumber = parseFloat(number);

  const formattedNumber = parsedNumber.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber;
}
