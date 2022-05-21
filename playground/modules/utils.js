const last = 'Lebron';
const middle = 'Noah';
const first = 'Benjo';
export function returnHi(name) {
  return `hi ${name} ${last}`;
}
export default first;
// named exports ⬇️
export { last, middle };
