/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
function doubleNumbers(arr){
  // your code here
  let result= arr.map(function(n){
    return n*2;
  })
  return result;
}
console.log(doubleNumbers([2, 5, 100]));

/*
 * Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]
*/

function stringItUp(arr){
  // your code here
  let result= arr.map(function(n){
    return n.toString();
  })
  return result;
}
console.log(stringItUp([2, 5, 100]));



/*
 * Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/

function capitalizeNames(arr){
  // your code here
  let strArray = [];
  for (let i = 0; i < arr.length; i++) {
    let str1=arr[i].slice(1);
    strArray.push(arr[i][0].toUpperCase()+ str1.toLowerCase()); 
  }
    return strArray;
  }
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt", 'YOUSEF']));
 /* Exercise 4:  
 * 
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case: 
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ])); 
 * 
 * Result:
 * 
 * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
 * "<h1>Eric Jones</h1><h2>2</h2>", 
 * "<h1>Paris Hilton</h1><h2>5</h2>", 
 * "<h1>Kayne West</h1><h2>16</h2>", 
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]
 */


  // your code here
  function readyToPutInTheDOM(arr){
    let arrayString = '';
    for(var i=0; i<arr.length; i++){
      arrayString = `<h1>${arr[i].name}</h1><h2>${arr[i].age},</h2>`
      document.write(arrayString) ;
    }
    return '';
  }
    document.write(readyToPutInTheDOM([
         {
             name: "Angelina Jolie",
             age: 80
         },
         {
             name: "Eric Jones",
             age: 2
         },
         {
             name: "Paris Hilton",
             age: 5
         },
         {
             name: "Kayne West",
             age: 16
         },
         {
             name: "Bob Ziroll",
             age: 100
         }
       ])); 



/*
* Exercise 5:
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]
*/

// your code here

function doubleValues(arr){
  let resultDouble =[];
  for(var i=0; i<arr.length; i++){
    resultDouble.push(arr[i]*2);
  }
  return resultDouble;
}
  console.log(doubleValues([1,2,3]));
  console.log(doubleValues([1,-2,-3]));
  /*
  * Exercise 6:
  * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
  *
  *
  * Test Cases :
  *   Test Case 1:  valTimesIndex([1,2,3])  
  *   Test Case 2:  valTimesIndex([1,-2,-3]) 
  * 
  * Result
  * Test Case 1: [0,2,6]
  * Test Case 2: [0,-2,-6]
  */
  
  function valTimesIndex(arr){
     // your code here   
     let result = [];
    for (var i=0; i<arr.length; i++){
      result.push(arr[i]*i);
    }
    return result;
  }
  console.log(valTimesIndex([1,2,3]))
  console.log(valTimesIndex([1,-2,-3]))
  
  /*
  * Exercise 7:
  * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
  * of that key in each object.
  * 
  * Test Case:
  * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
  * 
  * Result:
  * ['Elie', 'Tim', 'Matt', 'Colt']
  */
  
  function extractKey(arr, key){
     // your code here 
     let arrayString = [];
    for(var i=0; i<arr.length; i++){
      arrayString.push(arr[i].name);
    }
    return arrayString;
  }
  console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));
  
  /*
  * Exercise 8:
  * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
  * 
  * Examples:
  * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
  */
  
 function extractFullName(){
    // your code here 
    let arrayString = [];
    for(var i=0; i<arr.length; i++){
      arrayString.push(arr[i].name);
    }
    return arrayString;
  }
 