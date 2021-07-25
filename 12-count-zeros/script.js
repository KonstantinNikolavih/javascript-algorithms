/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
  const a = n + '';
  let zero = 0;
  let digits = a.length - 2;
  let num;
    if (digits == -1) {
    return 0; }  else if (digits === 0) {
    zero = a[0] * 1;
    return zero; } 
    else { 
    for(let i = 1; i <= a.length - 1; i++) { 
    num = a[i] * 1;
    if (i == a.length - 1) { zero = zero + Math.floor(n / 10);
      } else if (num != 0) { zero = zero + (a[i - 1] * (10**(digits)));
      } else { 
  let bigDigit = a[i - 1] * 1;
  zero = zero + (bigDigit - 1) * (10**digits) + 1;
   }
  } 
    return zero;
    }
  };

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
