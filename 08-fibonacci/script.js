/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
  if ((typeof n === 'number') && (n >= 0)) {
  let a = 1, b = 0, c = 0;
  if ((n === 0) || (n === 1)) { 
    return 0;
    }else{ 
    for(let i = 3; i <= n; i++) { 
      c = a; 
      a += b; 
      b = c;
    } 
  return a;
  }
} else {
   return a,b,c;
  }
};
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)