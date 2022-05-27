import { init } from './init.js';

init();
const app = document.querySelector('app');
app.addEventListener('mouseenter', init, { once: true });
