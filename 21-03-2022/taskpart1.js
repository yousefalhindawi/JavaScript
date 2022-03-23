/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/
function larger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else if ((num1 = num2)) {
    return `even`;
  }
}
//   alert(larger(5, 5.5))
console.log(larger(5, 5.5));

/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
function sign(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      // alert(`The sign is "-"`)
      console.log(`The sign is of number ${num[i]} "-"`);
    } else {
      //   alert(`The sign is "+"`)
      console.log(`The sign is of number ${num[i]} "+"`);
    }
  }
}
sign([1, -4, 0]);

/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
let num1 = [0, -1, 4];
function sorty(params) {
  return params.sort().reverse();
}
console.log(sorty(num1));
// alert(sorty(num1));
console.log(sorty([0, 5, 3, 2, 1, 4]));

/******* End Your Code ********* */

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
function largest(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= max) {
      max = array[i];
    }
  }
  return max;
}
let num2 = [-5, -2, -6, 0, -1];
console.log(largest(num2));
// alert(largest(num2));
/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
function name(x, y) {
  if (x > y) {
    console.log("Hello World");
  } else {
    console.log("Goodbye");
  }
}
name(3, 2);
name(1, 2);
/******* End Your Code ********* */
