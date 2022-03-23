console.log("Here is : ", "array");

/*
1
Correct the syntax error
 [1, 7, 9, 45]

 ["Str" "alex","moh"]

 ['the','fox' 'over' lazy, 'dog']

*/

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

"Tomato":0
"Banana":1
*/

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)

let Food = ['Mansaf','Apple','Banana','Watermelon','Orange'];
let Sport = ['Footbal','basketball','Handball']
let Movie = ['The Godfather', 'The Shawshank Redemption', 'No country for old men' , 'There will be blood']
*/

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"

*/
function firstOfArray(params) {
  console.log(params[0]);
}
firstOfArray([1, 4, 5]);
firstOfArray(["t", "u", "g", "x"]);
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(params) {
  console.log(params[params.length - 1]);
}
lastOfArray([1, 4, 5]);
lastOfArray(["t", "u", "g", "x"]);
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
let array = [0, 5, 7, 9];
for (let i = 0; i <= array.length + 2; i++) {
  array.pop();
}
for (let j = 1; j <= 10; j++) {
  array.push(j);
}
console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
let array2 = [5, 9, -7, 3.5];
let x = array2.unshift("yousef"); // returns the new length of the array.
console.log(x);
let y = array2.push("yousef"); // returns the new length of the array.
console.log(y);
let z = array2.shift(); // return the Removed element & If the array is empty, undefined is returned.
console.log(z);
let x1 = array2.pop(); // return the Removed element & If the array is empty, undefined is returned.
console.log(x1);
console.log(array2);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(params) {
  if (params.length % 2 === 0) {
    console.log(
      `${params[params.length / 2 - 1]} and ${params[params.length / 2]} `
    );
  } else {
    console.log(params[(params.length - 1) / 2]);
  }
}
middleOfArray([1, 4, 5]);
middleOfArray(["t", "u", "g", "x"]);
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
let animals = ["cat", "ele", "bird"];
animals = ["zebra", "elephant"];
console.log(animals);
let nums = [1, 2, 3, 8, 9];
nums = [5, -22, 3.5, 44, 98, 44];
console.log(nums);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
let nums1 = [1, 2, 3, 8, 9];
function indexOfArray(array, index) {
  return array[index];
}
console.log(indexOfArray(nums1, 3));
console.log(indexOfArray(nums1, 1));
console.log(indexOfArray(nums1, 4));

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
var nums2 = [1, 2, 3, 8, 9];
function arrayExceptLast(array) {
  array.pop();
  return array;
}
console.log(arrayExceptLast(nums2));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(array, value) {
  array.push(value);
  return array;
}
let nums3 = [1, 2, 3, 8, 9];
console.log(addToEnd(nums3, 55));
console.log(addToEnd(nums3, 85));
console.log(addToEnd(nums3, 100));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop
function sumArray(array) {
  let summation = 0;
  for (var i = 0; i < array.length; i++) {
    summation += array[i];
  }
  return summation;
}
let nums4 = [1, 2, 3, 8, 9];
console.log(sumArray(nums4));
let nums5 = [1, 2, 3, 8, 9, 77, 34, 9];
console.log(sumArray(nums5));
// while loop
function sumArray1(array) {
  let summation = 0;
  let i = 0;
  while (i < array.length) {
    summation += array[i];
    i++;
  }
  return summation;
}
console.log(sumArray1(nums4));
console.log(sumArray1(nums5));
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let nums6 = [1, 2, 3, 8, 9];
let nums7 = [8, 9, 77, 34];
function minInArray(array) {
  return Math.min(...array);
}
function maxInArray(array) {
  return Math.max(...array);
}
console.log(minInArray(nums6));
console.log(maxInArray(nums6));
console.log(minInArray(nums7));
console.log(maxInArray(nums7));
// for loop
let nums8 = [9, 9, 77, 34, 9, 55, 1, 8, 66, 55, 90, 34, 9, 55, 1];
function maxInArray1(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= max) {
      max = array[i];
    }
  }
  return max;
}
function minInArray1(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= min) {
      min = array[i];
    }
  }
  return min;
}
console.log(maxInArray1(nums8));
console.log(minInArray1(nums8));

// while loop
function maxInArray2(array) {
  let max = array[0];
  let index = 0;
  while (index < array.length) {
    if (array[index] >= max) {
      max = array[index];
    }
    index++;
  }
  return max;
}
function minInArray2() {
  let min = array[0];
  let index = 0;
  while (index < array.length) {
    if (array[index] <= min) {
      min = array[index];
    }
    index++;
  }
  return min;
}
console.log(maxInArray2(nums8));
console.log(minInArray2(nums8));
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let nums9 = [1, 2, 3, 8, 9];
function removeFromArray(array, elem) {
  array.splice(array.indexOf(elem), 1);
  return array;
}
console.log(removeFromArray(nums9, 8));

// for loop
let nums10 = [0, 10, 20, 35, 86, 94];
function removeFromArray1(array, elem) {
  let removedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == elem) {
      continue;
    }
    removedArray.push(array[i]);
  }

  return removedArray;
}

console.log(removeFromArray1(nums10, 20));

// while loop
function removeFromArray2(array, elem) {
  let removedArray = [];
  let index = -1;
  while (index < array.length - 1) {
    index++;
    if (array[index] == elem) {
      continue;
    }
    removedArray.push(array[index]);
  }

  /* do {
    index++;
    if (array[index] === elem) {
      continue;
    }
    removedArray.push(array[index])
  }
  while (index<array.length-1); */

  return removedArray;
}

console.log(removeFromArray2(nums10, 20));

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop
function oddArray(array) {
  let oddNumber = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNumber.push(array[i]);
    }
  }
  return `odd number is: ${oddNumber}`;
}

function evenArray(array) {
  let evenNumber = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumber.push(array[i]);
    }
  }
  return `even number is: ${evenNumber}`;
}
let nums11 = [1, 2, 3, 8, 9];
console.log(oddArray(nums11));
console.log(evenArray(nums11));

// while loop
function oddArray1(array) {
  let oddNumber = [];
  let index = 0;
  while (index < array.length) {
    if (array[index] % 2 !== 0) {
      oddNumber.push(array[index]);
    }
    index++;
  }
  return `odd number is: ${oddNumber}`;
}

function evenArray1(array) {
  let evenNumber = [];
  let index = 0;
  while (index < array.length) {
    if (array[index] % 2 === 0) {
      evenNumber.push(array[index]);
    }
    index++;
  }
  return `odd number is: ${evenNumber}`;
}
console.log(oddArray1(nums11));
console.log(evenArray1(nums11));
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// for loop
function aveArray(array) {
  let sum = 0;
  let averagestr = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  averagestr = (sum / array.length).toString();
  let average = averagestr.slice(0, averagestr.indexOf(".") + 2);

  return parseFloat(average);
  // return (average/array.length).toFixed(1);
}
let nums12 = [1, 2, 3, 8, 9];
let nums13 = [1, 2, 3, 8, 9, 77];
console.log(aveArray(nums12));
console.log(aveArray(nums13));

// while loop
function aveArray1(array) {
  let sum = 0;
  let averagestr = 0;
  let index = 0;
  while (index < array.length) {
    sum += array[index];
    index++;
  }
  averagestr = (sum / array.length).toString();
  let average = averagestr.slice(0, averagestr.indexOf(".") + 2);

  return parseFloat(average);
}
console.log(aveArray1(nums12));
console.log(aveArray1(nums13));
console.log(aveArray1(nums10));
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// for loop
function shorterInArray(array) {
  let shortestString = array[0];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i].length <= shortestString.length) {
      shortestString = array[i];
    }
  }
  return `"${shortestString}"`;
}
let strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(shorterInArray(strings));

// while loop
function shorterInArray1(array) {
  let shortestString = array[0];
  let index = 0;
  while (index < array.length) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].length <= shortestString.length) {
        shortestString = array[i];
      }
    }
    index++;
  }
  return `"${shortestString}"`;
}
let strings1 = ["alex", "mercer", "mad", "rashed2", "emad", "hala"];
console.log(shorterInArray1(strings1));
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// for loop
function repeatChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      count++;
    }
  }
  return count;
}
let string = "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string, "a"));
console.log(repeatChar(string, "z"));
console.log(repeatChar(string, "r"));

// while loop
function repeatChar1(string, char){
  let count = 0;
  let index = 0;
  while (index < string.length) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] == char) {
        count++;
      }
      index++;
  }
  return count;
}
}
console.log(repeatChar1(string, "a"));
console.log(repeatChar1(string, "z"));
console.log(repeatChar1(string, "r"));
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// foor loop
function evenIndexOddLength(array) {
  let newArray =[];
  for (let i=0; i<array.length; i++) {
    if (array.indexOf(array[i])%2===0 && array[i].length% 2 !== 0) {
        newArray.push(array[i]);
    }
  }
  return newArray;
}
let strings2= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(evenIndexOddLength(strings2));
let strings3= ["alexa","mercer","madrasa","rashed2","amani","hala"];
console.log(evenIndexOddLength(strings3));

// while loop
function evenIndexOddLength1(array){
  let newArray =[];
  let index = 0;
  while (index < array.length){
    if (array.indexOf(array[index])% 2 === 0 && array[index].length % 2 !== 0){
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
}
console.log(evenIndexOddLength1(strings2));
console.log(evenIndexOddLength1(strings3));
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// foor loop
function powerElementIndex(array){
  let newArray =[];
  for(let i=0; i<array.length; i++){
    newArray.push(Math.pow(array[i], array.indexOf(array[i])));
  }
  return newArray;
}
let nums14= [44, 5, 4, 3, 2, 10]
console.log(powerElementIndex(nums14));
// while loop
function powerElementIndex1(array){
  let newArray =[];
  let index = 0;
  while (index<array.length){
    newArray.push(Math.pow(array[index], array.indexOf(array[index])));
    index++;
  }
  return newArray;
}
console.log(powerElementIndex1(nums14));
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// foor loop
function evenNumberEvenIndex(array){
  let newArray =[];
  for (let i=0; i<array.length; i+=2){
    if (array[i] % 2 === 0){
      newArray.push(array[i]);
    }
  }
  return newArray;

}
let nums15= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndex(nums15))
// while loop
