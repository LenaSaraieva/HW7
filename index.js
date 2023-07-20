//Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);

const input1 = prompt('Enter the first line');
const input2 = prompt('Enter the second line');
const input3 = prompt('Enter the third line');
const concatenatedString = `${input3} ${input1} ${input2}`;
console.log(concatenatedString);

//Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

const fiveDigitN = prompt('Enter five digits number');
const arrayFiveDigits = fiveDigitN.split('').join(' ');
console.log(arrayFiveDigits);