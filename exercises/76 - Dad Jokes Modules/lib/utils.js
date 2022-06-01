export function randomItemFromArray(array, not) {
  const item = array[Math.floor(Math.random() * array.length)];
  if (item === not) {
    return randomItemFromArray(array, not);
  }
  return item;
}
