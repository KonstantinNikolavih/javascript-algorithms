/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

function palindrome(str) {
  let a = [], b = [];
  if ( typeof str === 'string') {
    const strLowerCase = str.toLowerCase();
    let palindrom = true;
    const symbols = [];
    for (let ind = 0; ind < strLowerCase.length; ind++) {
        if (!symbols.includes(strLowerCase[ind])) {
            a.push(strLowerCase[ind]);
       }
    }
    b = a.concat().reverse();
    for (let ind= 0; ind < a.length; ind++) {
        if (a[ind] != b[ind]) {
            palindrom = false;
            break; 
        }

    }
    return palindrom;      
  }      
  } 

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
 
/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 * 
 * palindrome('О, лета тело!'); // true
 * 
*/