// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent > 5000 &&XMLDocument totalSpent <= 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent === 5000 || totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(4000));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));

// function getShippingCost(country) {
//   let message;
//   // Change code below this line

//   switch (country) {
//     case "China":
//       const China = 100;
//       message = `Shipping to ${country} will cost ${China} credits`;
//       break;

//     case "Chile":
//       const Chile = 250;
//       message = `Shipping to ${country} will cost ${Chile} credits`;
//       break;

//     case "Australia":
//       const Australia = 170;
//       message = `Shipping to ${country} will cost ${Australia} credits`;
//       break;

//     case "Jamaica":
//       const Jamaica = 120;
//       message = `Shipping to ${country} will cost ${Jamaica} credits`;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }

//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("Jamaica"));

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   result =
//     message.length <= maxLength ? message : message.slice(maxLength) + "...";
//   /// Change code above this line
//   return result;
// }

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length > maxLength) {
//     result = message.slice(0, maxLength);
//   }

//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("sdfbshdvfs dsfsnfcv dfsffdf gggggg grgrgggggg"));

// function getExtremeElements(array) {
//   // Change code below this line
//   const f = array[0];
//   const l = array[array.length - 1];

//   return f + l;

//   // Change code above this line
// }

// function getExtremeElements(array) {
//   // Change code below this line
//   let arr = [];

//   for (let i = 0; i < array.length; i += 1) {
//     arr = array[0] + array.length - 1;
//   }

//   return arr;

//   // Change code above this line
// }

// function calculateTotal(number) {
//   // Change code below this line

//   let sum = 0;

//   for (let i = 0; i >= number; i++) {
//     sum += i;
//   }

//   return sum;
//   // Change code above this line
// }

// function findLongestWord(string) {
//   // Change code below this line
//   let arrStr = string.split(" ");
//   let longestWord = 0;
//   let word;

//   for (let i = 0; i < arrStr.length; i++) {
//     if (longestWord < arrStr[i].length) {
//       longestWord = arrStr[i].length;

//       word = arrStr[i];
//     }
//   }
//   return word;
//   // Change code above this line
// }

// function filterArray(numbers, value) {
//   // Change code below this line

//   let arrNum = [];

//   let bigNum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       bigNum = numbers[i];

//       arrNum.push(bigNum);
//     }
//   }

//   return arrNum;
//   // Change code above this line
// }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const key of colors) {
//   hexColors.push(key.hex);
//   rgbColors.push(key.rgb);
//   console.log(key.hex);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const arrNames = [];

//   const keys = Object.values(products);
//   console.log(keys);

//   for (const key of keys) {
//     console.log(key);
//     if (key.hasOwnProperty(propName)) {
//       arrNames.push(key[propName]);
//     }
//   }

//   console.log(arrNames);

//   return arrNames;
//   // Change code above this line
// }
// getAllPropValues("name");

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

//   const keys = Object.values(products);
//   let totalPrice = 0;

//   for (const key of keys) {
//     // console.log(key.price * key.quantity);
//     console.log(key);
//     if (key.name === productName) {
//       totalPrice = key.price * key.quantity;
//     }
//   }
//   console.log(totalPrice);

//   return totalPrice;

// Пиши код выше этой строки
// }
// calculateTotalPrice("Grip");

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line

// const {
//   today: {
//     highToday,
//     lowToday,
//     todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     highTomorrow,
//     lowTomorrow,
//     tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArr = [];

//   let num = 0;

//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       // почему если поменять местами ар1 и ар2 не работает коректно
//       // array1.includes(array2[i]);

//       num = array1[i];
//       newArr.push(num);
//     }
//   }

//   return newArr;
//   // Change code above this line
// }

// console.log(getCommonElements([5, 2, 3, 20, 10, 8], [23, 1, 2, 20, 5, 8]));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const bookIndex = this.books.indexOf(oldName);

//     console.log(bookIndex);

//     this.books.splice(bookIndex, 1, newName);

//     return bookIndex;
//     // Change code above this line
//   },
// };
// bookShelf.updateBook("The last kingdom");

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     console.log(this.potions);
//     this.potions.splice(potionName, 1);
//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const obj of this.potions) {
//       if (obj.name === newPotion.name) {
//         return `Potion ${newPotion} is already equipped!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === potionName) {
//         // return `Potion ${potionName} is not in inventory!`;

//         this.potions.splice(i, 1);
//       }
//       // console.log(obj.name);
//     }
//     console.log(`Potion ${potionName} is not in inventory!`);

//     // console.log(this.potions);
//     console.log();
//   },

//   updatePotionName(oldName, newName) {
//     // console.log(this);

//     for (let i = 0; i < this.potions.length; i++) {
//       console.log(this.potions[i].name);
//       // console.log(i);
//       // console.log(oldName);
//       // console.log(newName);
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },

//   // Change code above this line
// };
// atTheOldToad.addPotion({ name: "Speedfsadd potion", price: 460 });

// atTheOldToad.removePotion("Dragon breath");

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];

// for (let i = 0; i < orders.length; i++) {
//   // messages.push(composeMessage.call(i));
//   // console.log(orders[i].dish);
//   messages.push(composeMessage.call(orders[i], i + 1));
// }
// console.log(messages);

// const service = {
//   mailingList: ["mango@mail.com", "poly@hotmail.de", "ajax@jmail.net"],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction(
//   "kiwi@mail.uk",
//   service.subscribe.bind(service)
// );
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com',
//     'poly@hotmail.de',
//     'ajax@jmail.net',
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction(
//   "poly@hotmail.de",
//   service.unsubscribe.bind(service)
// );
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   const indexItem = this.items.indexOf(item);

//   this.items.splice(indexItem, 1);
// };

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return (this.value = baseValue);
// };

// StringBuilder.prototype.padStart = function (str) {
//   // const arrStr = Object.values(this.value);
//   // arrStr.unshift(str);
//   return (this.value = this.value + str);
// };

// StringBuilder.prototype.padEnd = function (str) {
//   // const arrStr = Object.values(this.value);
//   // arrStr.push(str);
//   // arrStr.join("");
//   // console.log(arrStr);
//   return (this.value = str + this.value);
// };

// StringBuilder.prototype.padBoth = function (str) {
//   return (this.value = str + this.value + str);
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

//
// // Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// // Пиши код выше этой строки
// console.log(calculateTotalPrice([20, 50, 30]));

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newArrNumbers = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       number = number + value;
//     }
//     newArrNumbers.push(number);
//   });

//   return newArrNumbers;
//   // Пиши код выше этой строки
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика", "мистика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика", "приключения"],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap((ganre) => ganre.genres);
// const uniqueGenres = allGenres.filter(
//   (ganre, index, array) => array.indexOf(ganre) === index
// );
// console.log(allGenres);
// console.log(uniqueGenres);

// Пиши код ниже этой строки

// const getFriends = (users) => {
//   const arrFriends = users.flatMap((user) => user.friends);

//   // console.log(arrFriends);
//   const resArr = arrFriends.filter(
//     (friend, index, arr) => arr.indexOf(friend) === index
//   );

//   console.log(resArr);
// };
// // Пиши код выше этой строки
// getFriends();

// const getActiveUsers = (users) => {
//   const activUsers = [];
//   const arrFriends = users.filter(
//     (user) =>
//       //возвращает массив активных
//       user.isActive ? activUsers.push(user.name) : false

//     //возвращает массив нет активных
//     // user.isActive === false ? activUsers.push(user.name) : false
//   );
//   console.log(activUsers);
//   return arrFriends;
// };

// const getActiveUsers = (users) =>
//   users.some((user) => console.log(user.isActive));

// const players = [
//   { name: "Манго", playtime: 1270, gamesPlayed: 4 },
//   { name: "Поли", playtime: 469, gamesPlayed: 2 },
//   { name: "Аякс", playtime: 690, gamesPlayed: 3 },
//   { name: "Киви", playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, player) => acc + player.playtime / player.gamesPlayed,
//   0
// );
// console.log(totalAveragePlaytimePerGame);
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
//   { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
//   .sort((firstAutor, secondAutor) =>
//     // firstAutor.name.localeCompare(secondAutor.name)
//     console.log(firstAutor.name - secondAutor.name)
//   )
//   .map((author) => author.rating > MIN_BOOK_RATING);

// console.log(names);

// const getNamesSortedByFriendCount = (users) => {
//   const arr = users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);

//   console.log(arr);
// };

// const getSortedFriends = (users) => {
//   const arr = users
//     .flatMap((user) => user.friends)
//     .filter((user, index, arr) => arr.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b));

//   console.log(arr);
// };

// const getTotalBalanceByGender = (users, gender) => {
//   const ar = users
//     .filter((user) => user.gender === gender)
//     .reduce((acc, user) => acc + user.balance, 0);

//   console.log(ar);
// };
// getTotalBalanceByGender(
//   [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: [
//         "Jacklyn Lucas",
//         "Linda Chapman",
//         "Adrian Cross",
//         "Solomon Fokes",
//       ],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ],
//   "male"
// );

// const makeShef = (name) => {
//   return function makeDish(disgh) {
//     console.log(`${name} is cooking ${disgh}`);
//   };
// };

// const mango = makeShef("mango");

// mango("milk");

// function pigIt(str) {
//   //Code here
//   const newStr = str.split(" ").map((el) => {
//     const arrWords = el.split("");
//     const firstEl = arrWords.splice(0, 1);
//     const valid = /[^A-Z a-z0-9]/;

//     arrWords.push(firstEl + "ay");

//     if (valid.test(arrWords[0])) {
//       arrWords[0] = leaveSymbol(arrWords[0]);
//     }

//     return arrWords.join("");
//   });

//   function leaveSymbol(arr) {
//     let oneSymbol = "";

//     if (arr) {
//       oneSymbol = arr.slice(0, 1);
//     }

//     return oneSymbol;
//   }

//   return newStr.join(" ");
// }
// console.log(pigIt("This is my string , * ! ."));
// pigIt("Hello , world !"); // elloHay orldway !
// pigIt("Pig latin , is cool"), "igPay atinlay siay oolcay";
// pigIt("This is my string"), "hisTay siay ymay tringsay";

// console.log(pigIt("Hello d hi 0 9 777 77 sss ! worl * ! $ $ *")); // elloHay orldway !

// function pyramid(n) {
//   // your code here
//   const arr = [];
//   let num = "1";

//   for (let i = 1; i <= n; i++) {
//     const piramidArr = num.split("").map((el) => +el);

//     console.log(piramidArr);

//     arr.push(piramidArr);

//     num += 1;
//   }
//   console.table(arr);
// }
// // pyramid(5);

// function cockroachSpeed(s) {
//   //Good Luck!
//   return Math.floor(s / 0.036);
// }

// console.log(cockroachSpeed(3.4523999259949294));

// function highAndLow(numbers) {
//   // ...

//   // const arrNum = numbers.split(" ").filter((element) => {
//   //   return element < num;
//   // });

//   return `${Math.max(...numbers.split(" "))} ${Math.min(
//     ...numbers.split(" ")
//   )}`;
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// function solution(str, ending) {
//   // TODO: complete

//   console.log(str.substr(-ending.length));

//   return str.substr(-ending.length) === ending;
// }

// console.log(solution("abcde", "de"));
// function lovefunc(flower1, flower2) {
//   // moment of truth
//   return flower1 % 2 !== flower2 % 2;
// }
// console.log(lovefunc(33, 675));
// console.log(lovefunc(2, 2));
// console.log(lovefunc(0, 1));
// console.log(lovefunc(0, 0));

// function solution(nums) {
//   return nums === null ? [] : nums.sort((a, b) => a - b);
// }
// console.log(solution(null));

// function likes(names) {
//   // TODO
//   switch (names.length) {
//     case 0:
//       return `no one likes this`;

//     case 1:
//       return `${names[0]} likes this`;

//     case 2:
//       return `${names[0]} and ${names[1]} like this`;

//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;

//     default:
//       return `${names[0]}, ${names[1]} and ${
//         names.length - 2
//       } others like this`;
//   }
// }
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// function bump(x) {
//   const n = x.split("").filter((el) => el === "n");
//   //   console.log(n.length);
//   return n.length <= 15 ? "Woohoo!" : "Car Dead";
// }
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));

// function makeValley(arr) {
//   // Your code
//   const newArr = [...new Set(arr)];

//   console.log(newArr);
//   console.log(...newArr, ...newArr.reverse());
// }

// console.log(makeValley([20, 18, 16, 15, 14, 14, 13, 13, 10, 9, 4, 4, 4, 1]));
// (function (x) {
//   return x * x;
// })(2);
// console.log(
//   (function (x) {
//     return x * x;
//   })(2)
// );

// console.log(((x) => x * x)(2));

// const arr1 = [1, 2, 3];
// const arr2 = ["a", "b", "c"];

// // ваш код тут
// arr1.mySuperFunc = function () {
//   return arr1;
// };

// arr2.mySuperFunc = function () {
//   return arr2;
// };

// const arr3 = ["x", "y", "z"];

// arr3.mySuperFunc = function () {
//   return arr3;
// };

// console.log(arr1.mySuperFunc()); // 1-2-3
// console.log(arr2.mySuperFunc()); // a-b-c
// console.log(arr3.mySuperFunc()); // x-y-z

// for (var n = 0; n < 10; n++) {
//   setTimeout(() => console.log(n), 0);
//   console.log(n);
// }

// let qwert;
// console.log(`"some" + ${qwert}` ? "string" : "int" + "here");

// const data = [1, 2, 3, null, undefined, ""];

// // clear(data); // [1,2,3]

// console.log(data.includes(null || undefined));

// const str = "asdbsa.txt";

// const fn = (str) => {
//   const newArr = str.split("");
//   const indx = newArr.indexOf(".");

//   return newArr.slice(indx + 1).join("");
// };

// console.log(fn("asdbsdfsa.txt"));
