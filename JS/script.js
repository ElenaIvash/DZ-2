"use strict"
let num1 = prompt("введите первое число");
let num2 = prompt("введите второе число");
let num3 = (+num1 + +num2);
let num4 = (+num1 - +num2);
let num5 = (+num1 * +num2);
let num6 = (+num1 / +num2);
alert(`Результат: ${num1} + ${num2} = ${num3}`);
alert(`Результат: ${num1} - ${num2} = ${num4}`);
alert(`Результат: ${num1} * ${num2} = ${num5}`);
alert(`Результат: ${num1} / ${num2} = ${num6}`);