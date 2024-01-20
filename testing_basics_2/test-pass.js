export function capitalize(string) {
  if (typeof string !== "string") return null;

  for (const char of string) {
    if (!(char >= "a" && char <= "z") && !(char >= "A" && char <= "Z")) {
      if (char !== " ") {
        return null;
      }
    }
  }

  const splitString = string.split(" ");
  const newString = [];

  splitString.forEach((item) => {
    newString.push(item.charAt(0).toUpperCase() + item.slice(1));
  });

  const convertedString = newString.toString().replaceAll(",", " ");

  return convertedString;
}

export function reverseString(string) {
  let regex = /^[a-zA-Z ]+$/;

  if (typeof string !== "string" || !regex.test(string)) return null;

  const splitString = string.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");

  return joinArray;

  //   let newString = "";
  //   for (let i = string.length - 1; i >= 0; i--) {
  //     newString += string[i];
  //   }
  //   return newString;

  //   const splitString = string.split("");
  //   const newString = [];

  //   const charSum = splitString.length;

  //   for (let i = 0; i < charSum; i++) {
  //     newString.push(splitString.pop());
  //   }

  //   return newString.toString().replaceAll(",", "");
}

export function calculator() {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;

  return { add, subtract, divide, multiply };
}

function cipherCombination(
  key = 5,
  alphabet = " .,?!abcdefghijklmnopqrstuvwxyz0123456789"
) {
  if (typeof alphabet !== "string") return null;

  const convertedPlaintext = alphabet.slice(key) + alphabet.slice(0, key);
  const tempAlphabet = [];

  for (const char of convertedPlaintext) {
    if (char >= "a" && char <= "z") {
      tempAlphabet.push(char.toUpperCase());
    } else {
      tempAlphabet.push(char);
    }
  }

  const plaintextAlphabet = alphabet;
  const cipheredAlphabet = tempAlphabet.join("");

  return { plaintextAlphabet, cipheredAlphabet };
}

export function caesarChiper(string, key, mode = true) {
  const newString = string.toLowerCase();

  let caesarTable;

  switch (mode) {
    case true:
      caesarTable = cipherCombination(key);
      break;

    case false:
      let newKey;

      if (Math.sign(key) === 1) {
        newKey = -key;
      } else {
        newKey = key;
      }

      caesarTable = cipherCombination(newKey);
      break;
  }

  const stringText = newString.split("");
  const plainText = caesarTable.plaintextAlphabet.split("");
  const cipherText = caesarTable.cipheredAlphabet.split("");

  const tempIndex = [];

  for (const char of stringText) {
    tempIndex.push(plainText.indexOf(char));
  }

  let text = "";

  tempIndex.forEach((index) => {
    if (cipherText[index] == undefined) {
      text += " ";
    } else {
      text += cipherText[index];
    }
  });

  console.log(`Your encryption key are ${text}`);
  return text;
}

export function analyzeArray(array) {
  const sumArray = array.reduce((prev, current, index) => {
    return prev + current;
  }, 0);

  const average = sumArray / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return { average, min, max, length };
}
