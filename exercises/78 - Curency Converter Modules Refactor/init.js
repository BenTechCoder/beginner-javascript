import { toSelect, fromSelect } from './elements.js';
import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import { handleInput } from './handlers.js';

export function init() {
  // testAPI().catch(error => console.log('error', error));
  const form = document.querySelector('.app form');
  const optionsHTML = generateOptions(currencies);

  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener('input', handleInput);
}
