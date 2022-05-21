export async function handleButtonClick(e) {
  const currencies = await import('./currencies.js');
  console.log(
    '🚀 ~ file: handlers.js ~ line 4 ~ handleButtonClick ~ currencies',
    currencies.default
  );
}
