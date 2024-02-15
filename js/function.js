function checkLengthOfString(checkedString, maxLength){
  return checkedString.length <= maxLength;
}

console.log(
  checkLengthOfString('rdfewds', 3), //false
  checkLengthOfString('123456789', 9), // true
  checkLengthOfString('rtfgc', 6) // true
);

function isPalindrom(checkedString){
  const normalizedString = checkedString.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--){reverseString += normalizedString.at(i);}

  return normalizedString === reverseString;
}

console.log(isPalindrom('топот'), //true
  isPalindrom('ДовОд'), //true
  isPalindrom('Кекс'), //false
  isPalindrom('Лёша на полке клопа нашёл'), //true
  isPalindrom('ABcd ef g h 1 2 21 hgfe d cba') // true
);

function getNumberFromString(originalString){
  let result = '';
  const arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  originalString = originalString instanceof String? originalString: String(originalString);

  for (let char of originalString){
    if (!Number.isNaN(parseInt(char, 10))) {
      result += char;
    }
  }

  return result === ''? NaN: result;
}

console.log(
  getNumberFromString('eerer'), // NaN
  getNumberFromString('ee-323rer'), //323
  getNumberFromString('2023 год'), // 2023
  getNumberFromString('ECMAScript 2022'), // 2022
  getNumberFromString('1 кефир, 0.5 батона'), // 105
  getNumberFromString('агент 007'),  // 007
  getNumberFromString('а я томат!!!!!!!!!!!!!!'), // NaN
  getNumberFromString(2023), // 2023
  getNumberFromString(-1),   // 1
  getNumberFromString(1.5),  // 15
  getNumberFromString(-11.5) // 115
);
