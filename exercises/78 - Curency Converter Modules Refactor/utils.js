export function generateOptions(options) {
  return Object.entries(options)
    .map(function([currencyCode, currencyName]) {
      return `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`;
    })
    .join('');
}

export function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}
