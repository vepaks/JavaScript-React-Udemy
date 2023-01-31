//смяна на елементи в низ
changeChar("zzHe", "z", "l");

function changeChar(string, match, text) {
  let tokens = string.split(match);
  return tokens.join(text);
}

//вмъкване на текст в низ
getString("llHe", 2, "o");

function getString(string, index, text) {
  let start = string.substring(0, index);
  let end = string.substring(index);
  return start + text + end;
}

//манипулация с елементи на низ
moveChar("lloHe", 3);

function moveChar(string, num) {
  let start = string.substring(0, num);
  let end = string.substring(num);
  return end + start;
}

//смяна на букви или думи в низ
changeCharInString("A small sentence with some words", "small");

function changeCharInString(text, word) {
  let tokens = text.split(word);
  return tokens.join("*".repeat(word.length));
}

//подмяна на елемент в стринг
noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");
function noSpace(x) {
  return x.split(" ").join("".repeat(x.length));
}

//подмяна на звездички с дума

getWord(
  "great",
  "softuni is ***** place for learning new programming languages"
);

function getWord(words, string) {
  words = words.split(", ");
  for (const word of words) {
    string = string.replace("*".repeat(word.length), words);
  }
  return string;
}

// хипотенуза
hypotenuse(3, 4);
function hypotenuse(m, n) {
  function square(num) {
    return num * num;
  }
  return Math.sqrt(square(m) + square(n));
}

// сортиране на обекти с
const maxSpeed = {
  car: 300,
  bike: 60,
  motorbike: 200,
  airplane: 1000,
  helicopter: 400,
  rocket: 8 * 60 * 60,
};

const sortable = Object.fromEntries(
  Object.entries(maxSpeed).sort(([, a], [, b]) => a - b)
);

//PascalCase
const toPascal = (text) =>
  text
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase())
    .join("");

//CamelCase
const toCamelCase = (text) => {
  text = toPascal(text);
  return text[0].toLowerCase() + text.slice(1);
};

// Превключване на елементи
const toggleElementDisplay = (element) =>
  (element.style.display = element.style.display === "none" ? "block" : "none");

// Обръщане реда на String

const stringReverse = (str) => str.split("").reverse().join("");

// Добавяне на Главни букви
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

capitalize("i hope you like my article.");
// I hope you like my article.
