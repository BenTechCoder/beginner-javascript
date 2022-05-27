const endpoint = 'https://api.apilayer.com/exchangerates_data/latest';
const myHeaders = new Headers();
myHeaders.append('apikey', 'YZPSWUEmV0bWbeuM4yXYOB1pCSJUBn9F');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

const ratesByBase = {};

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

export { fetchRates, convert };
