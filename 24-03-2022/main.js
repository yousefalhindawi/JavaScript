
console.log('Here is : ', 'Object')

let person = {
    firstName: 'yousef',
    lastName: 'alhindawi',
    age: 28,
    dob: '28/4/1993',
    favoriteFood:['apple','apple','apple'],
    favoriteMovie:['fight club','fight club','fight club','fight club','fight club']
}
/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food 
(3),favorite movie (5)
*/
var persons = [
 { name: { first: 'John', last: 'Hob' }, age: 35 },
 { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
 { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
 { name: { first: 'Zues', last: 'Odin' }, age: 55 },
 { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

function firstName(params) {
    let fname =[]
    for (let i = 0; i < params.length; i++) {
        fname.push(params[i].name.first);
    }
    return fname;
}
console.log(firstName(persons))
/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/
function averageAge(params) {
    let average =0;
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i].age;
    }
    average = sum/params.length
    return average;
}
console.log(averageAge(persons));
/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person
Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(params){
    let oldername ='';
    let older = params[0].age;
    for (let i = 0; i < params.length; i++) {
        if (params[i].age>= older){
            older = params[i].age
            oldername=`${params[i].name.first} ${params[i].name.last}`
        }
    }
    return oldername;
}
console.log(olderPerson(persons));
/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
// console.log(`${persons[1].name.first} ${persons[1].name.last}`)
function longestName(params){
    // let fullName ;
    // let longestName='';
    let longestName = '';
    for (let i = 0; i < params.length; i++) {
        if (`${params[i].name.first} ${params[i].name.last}`.length > longestName.length){
            longestName = `${params[i].name.first} ${params[i].name.last}`
        }
    }
    return longestName;
}
console.log(longestName(persons));
/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
//////////////////////////////////////////////////////////////////
/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello 
HELLO")
=> {
 my:1,
 name:2,
 is:1,
 alex:1,
 mercer:1,
 class:1,
 b:1,
 baba:1,
 mama:1,
 hello:3
}
*/
function repeatWord(string) {
    let obj = {}
    let split = string.toLowerCase().split(" ");
    for (let i = 0; i < split.length; i++) {
        if (obj[split[i]] === undefined) {
            obj[split[i]] = 1;
          } else {
            obj[split[i]]++;
          }
    }
    return obj;
}
function repeatNumber(array) {
    let obj = {}
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]] === undefined) {
            obj[array[i]] = 1;
          } else {
            obj[array[i]]+= 1;
          }
    }
    return obj;
}
console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"))
console.log(repeatNumber([1,6,1,5,1,2,1,5,1,1,6,1,2]))

function repeatNumber1(array){
    let obj ={}
    for(let i=0; i<array.length; i++){
        let counter = 0
        for(let j=0; j<array.length; j++){
            if (array[i]===array[j]){
                counter++
            }
            obj[array[i]]=counter
        }
    }
    return obj;
}

console.log(repeatNumber1([1,1,1,1,1,1,1,1,1,1,1,1,1]))

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??
Ex: repeatChar("mamababatetacedo")
=> { m:2, a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(params) {
    let obj = {}
    let split = params.toLowerCase().split("");
    for (let i = 0; i < params.length; i++) {
        if (obj[split[i]] === undefined) {
            obj[split[i]] = 1;
          } else {
            obj[split[i]]++;
          }
    }
    return obj;
}
console.log(repeatChar("mamababatetacedo"))
/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array
Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=> {a: 1, cat: 3}
*/
function selectFromObject(object,array) {
    let arr = Object.keys(object);
    for (let i = 0; i < array.length; i++) {
        if (arr[i]!==array[i]){
            delete object[arr[i]];
        }
    }
    return object;
}
console.log(selectFromObject({a: 1, cat: 3, c:5, b:2}, ['a', 'cat', 'd','g', 't']))

