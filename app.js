// ---------------class
// class Calculator {
//   constructor(initialValue = 0) {
//     this.value = initialValue;
//   }

//   add(num) {
//     this.value += +num;
//     return this.value;
//   }

//   subtract(num) {
//     this.value -= +num;
//     return this.value;
//   }

//   multiply(num) {
//     this.value *= +num;
//     return this.value;
//   }

//   divide(num) {
//     this.value /= +num;
//     return this.value;
//   }
// }
// num1 = new Calculator()
// console.log(num1.add(20))


// lab2
// class Sale {
//   constructor(name, amount, price) {
//     this.name = name;
//     this.amount = amount;
//     this.price = price;
    
//   }
//    calPrice = () => {return this.price * this.amount;}

// }
// // num = new Sale('noo',3,60)
// // console.log(num.calPrice())
// class Beverage extends Sale {
//   constructor(name, amount, price) {
//     super(name, amount, price);
//   }
// }
// beverage = new Beverage('pep', 3,20)
// console.log(beverage.calPrice())

//-----isArray
// lab1
// const checkArray = (input) => {return Array.isArray(input)}

// let array = 1345
// console.log(checkArray(array))

// --------------------------------Object key, value, entries
// lab1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0
// for ( let value of Object.values(salaries)) {
//   sum += value;
// }

// console.log(sum)

// lab2
// const checkEmptyObj = (objs) => {
//   return Object.keys(objs).length === 0 ? 'empty' : 'not empty';
// }
// let A = {a:1}
// console.log(checkEmptyObj(A))


// ----------------------Rest Parameter
// lab1
// sum = (...nums) => {
//   let result = 1;
//   for (let num of nums) result *= num;
//   return result;
// }
// console.log(sum(1,2,3)) 

// lab2
// filterOutOdds = (...nums) => {
//   let number = []
//   for (let num of nums) 
//   if(num%2 == 0) {
//     number.push(num)
    
//   }return number
// }
// console.log(filterOutOdds(2,4,6,7,8))

// lab3
// mergeObjects =(...objs) => {
//   return Object.assign({}, ...objs);
// }
// let obj1 = {a:1, b:2}
// let obj2 = {c:1, d:2}
// let obj3 = {e:1, f:2}

// console.log(mergeObjects(obj1,obj2,obj3)) 

// lab4
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// const num3 = [5,...nums1,-6,-1,...nums2]
// console.log(num3)

// console.log(...num3)
// sum = num3.reduce((prev,curr) => {
//     return prev += curr;
// },0)
// console.log(sum)

// lab6
// const personal = (fName, lName, ...hobby) => {
//   numCal = hobby.length;
//   const person = {
//   fname: fName,
//   lName: lName,
//   numCal: numCal,
//   hobby: hobby
//   };
//   console.log(person)
//   return person
// }
// const result = personal("John", "Doe", "Reading", "Cycling", "Gaming");
// console.log(result)


// lab7
// const doubleAndReturnArgs = (arr, ...nums) => {
 
//   const doubledNums = nums.map(num => num * 2);

//   return [...arr, ...doubledNums];
// };

// // ทดสอบฟังก์ชัน
// const result = doubleAndReturnArgs([1, 2, 3], 4, 5, 6);
// console.log(result); 

// lab9
// clonArray = (arr) => {
//  const newArray = [...arr];
//  return newArray
// }
// const originalArray = [1, 2, 3, 4, 5];
// const b = clonArray(originalArray)
// console.log(b)

// lab10
// cloneObject = (obj) => {
//   const newObj = {...obj}
//   return newObj
// }
// const obj1 = { a: 1, b: 2, c: 3 };
// const a = cloneObject(obj1)
// console.log(a)



// lab11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // *
// console.log(second); // **
// console.log(third); // ***
// Maya

// lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // *
// console.log(whiskers); // **
// console.log(aFewOfMyFavoriteThings); // ***
// Raindrops on roses

// lab13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // *
// 10 30 20


// lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // *
// console.log(yearNeptuneDiscovered); // **
// 8

// lab15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // *
// {
//   yearMarsDiscovered:
//   1659
//   yearNeptuneDiscovered:
//   1846
// }

// lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
// // getUserData({ firstName: 'Melissa' }); // **
// // getUserData({}); // ***
// "Your name is Alejandro and you like purple"

// lab17
// let guest = 'Jane';
// let admin = 'Pete';
// [guest, admin] = [admin, guest];
// console.log(guest)
// console.log(admin)

// lab18
// checkEge = (users) => {
  
//   if(users.age > 18) {
//     return `Hi ${users.fName} ${users.lName}`;
//   }else {return "no"};
//   }
// user = {
//   fName: 'Bond',
//   lName: 'Bd',
//   age: 19
// };
// console.log(checkEge(user))

// lab19
// let user = {
//   name: 'John',
//   years: 27
// };
// const  { name, year: age, isAdmin = false} = user
// console.log(name);   
// console.log(age);     
// console.log(isAdmin);

// lab21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// const  [a, [b, [[[c,d],e], f]]] = arr
// console.log(f)

// lab22
// const obj = { prop: 5, prop2: 10 };
// const {prop: a, prop2: b} = obj;
// console.log(a)

// lab23
// let a, b;
// { a, b } = { a: 1, b: 2 };
// console.log(a) 1
// console.log(b)2
// error

// lab24
// const [, , , a, b] = [1, 2, 3];
// console.log(a)
// undefined
// console.log(b)
// undefined

// lab25
// const q = { prop: 5, prop2: [10, 100] };
// const {prop: x, prop2: [ , y]} = q
// console.log(x)
// console.log(y)

// lab26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };
// const {prop: x, prop2: {prop2: {nested: [,y,]}}} = q;
// console.log(x)
// console.log(y)

// lab27
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jane', lastName: 'Smith' },
//   { firstName: 'Emily', lastName: 'Jones' }
// ];

// for (const { firstName, lastName } of names) {
//   console.log(`Full name: ${firstName} ${lastName}`);
// }

// lab28
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for ( const {user, age = 'unknow'} of users) {
//   console.log(`${user} ${age}`)
// }
