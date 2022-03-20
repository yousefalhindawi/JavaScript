// Task-1
let input = 85;

switch (true) {
  case input >= 0 && input <= 49:
    console.log("Fall");
    break;
  case input >= 50 && input <= 59:
    console.log("E");
    break;
  case input >= 60 && input <= 69:
    console.log("D");
    break;
  case input >= 70 && input <= 79:
    console.log("C");
    break;
  case input >= 80 && input <= 89:
    console.log("B");
    break;
  case input >= 90 && input <= 100:
    console.log("A");
    break;
  case input > 100:
  case input < 0:
    console.log("This Value unvalid");
    break;
  case input === "uncomplete":
    console.log("uncomplete");
    break;
}

// Task-2
let day = 5;

switch (day) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 5:
    console.log("Wednesday");
    break;
  case 6:
    console.log("Thursday");
    break;
  case 7:
    console.log("Friday");
    break;
}
