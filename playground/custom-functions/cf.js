function calculateBill(price, tax) {
    let calcu = price * tax;
    console.log(calcu)
    return calcu;
}

calculateBill(30, 1.13)
const myLunch = calculateBill(30, 1.13);

function yell(name = 'wes') {
    return `HEY ${name.toUpperCase()}`
}

yell('ben')