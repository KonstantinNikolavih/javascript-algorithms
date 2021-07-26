/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
  if (num > 1) {
  if (num === 2) {
    return 2;
  } else if (num === 3) {
    return [2, 3];
    } else {
    let numbers = [2, 3];
    firstLoop:
    for (let i = 4; i <= num; i++) {   
    const a = Math.floor(Math.sqrt(i));
    for (let j = 2; j <= a; j++) {
    if (i % j === 0) {       
     continue firstLoop;                     
    }
    }
  numbers.push(i);
  }
  return numbers;
  }
  } else {
  return [];
  }
};

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]