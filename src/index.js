/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {boolean}
 */
export const replaceZAndVFromString = (string) => {

   let newString = "";

   for (let i = 0; i < string.length; i++){
      if (string[i].toLowerCase() === "z"){
         newString += '*';
      } else if (string[i].toLowerCase() === "v") {
         newString += '*';
      } else {
         newString += string[i];
      }
   }

   return newString;
};

/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
export const changeWord = (string, word, newWord) => {

    let singleWord = string.split(' ');

    for (let i = 0; i < singleWord.length; i++) {
        if (singleWord[i] === word) {
            string = string.replace(singleWord[i], newWord)
            break;
        }
    }

    return string;

    /*

       let singleWord = string.split(' ');

       let newString = singleWord.map(function (item) {

          if (item.toLowerCase() === word) {
             return newWord;
          } else {
             return item
          }
       });

          return newString.join(' ');

     */
};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) => {

    let newString = string.slice(0,length);

    return newString;

};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbols = (string, symbol) => {

   let total = 0;

   for(let i = 0; i < string.length; i++){
     let symbolCount = total;

      if(string[i].toLowerCase() === symbol){
         total = symbolCount + 1;
      }
   }

   return total;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
      let i = 0;
      let index = string.toLowerCase().indexOf(symbol);

      while (index !== -1) {
         i++
         index = string.indexOf(symbol, index + 1);
      }

      return i;
};
