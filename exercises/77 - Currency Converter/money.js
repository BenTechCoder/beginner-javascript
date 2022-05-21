const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('.to_amount');
const form = document.querySelector('.app form');
const endpoint = 'https://api.apilayer.com/exchangerates_data/latest';
const myHeaders = new Headers();
myHeaders.append('apikey', 'YZPSWUEmV0bWbeuM4yXYOB1pCSJUBn9F');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

const ratesByBase = {};

const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

function genetateOptions(options) {
  return Object.entries(options)
    .map(function([currencyCode, currencyName]) {
      return `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`;
    })
    .join('');
}

async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?symbols=&base=${base}`, requestOptions);
  const rates = await res.json();
  return rates;
}

async function convert(amount, from, to) {
  if (!ratesByBase[from]) {
    const rates = await fetchRates(from);
    ratesByBase[from] = rates;
    localStorage.setItem('ratesByBase', JSON.stringify(ratesByBase));
  }
  const rateFromLS = JSON.parse(localStorage.getItem('ratesByBase'));
  // let rate;
  // if (!rateFromLS === null) {
  //   rate = rateFromLS[from].rates[to];
  //   console.log(rateFromLS);
  // } else {
  //   rate = ratesByBase[from].rates[to];
  // }
  const rate = rateFromLS[from].rates[to];
  const convertedAmount = rate * amount;
  return convertedAmount;
}

// testAPI().catch(error => console.log('error', error));

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  // formatCurrency(rawAmount, toSelect.value)
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

const optionsHTML = genetateOptions(currencies);

fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;
// fetch("https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}", requestOptions)

form.addEventListener('input', handleInput);
