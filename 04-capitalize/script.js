/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  if (typeof str === 'string') {
  let revivalLin = str.split(' ');
  for (let i = 0; i < revivalLin.length; i++) {
    revivalLin[i] = revivalLin[i].replace(revivalLin[i][0], revivalLin[i].charAt(0).toUpperCase());
    }
    return revivalLin.join(' ');
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"