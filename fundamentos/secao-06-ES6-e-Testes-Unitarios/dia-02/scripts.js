function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

const mapString = (objectMap, string) => {
  const splitString = string.split("");
  const mappedArray = [];
  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];

    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }
  return mappedArray.join("");
};

const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
};
const decode = (string) => {
  const map = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };
  return mapString(map, string);
};

const techList = (techs, nome) => {
  if (techs.length > 0) {
    const list = [];
    techs.sort();
    techs.forEach((tech) => {
      list.push({name : nome, tech : tech});
    });
    return list;
  }
  return "Vazio!";
};

const hydrate = (phrase) => {
  let numbers = (phrase.match(/\d+/gi));
  let result = 0;
  numbers.forEach(number => {
    result += Number(number);
  });
  let message = result > 1 ? `${result} copos de água` : '1 copo de água';
  return message;
};

// implemente seus testes aqui
module.exports = { myRemove, myFizzBuzz, encode, decode, techList, hydrate };
