// Task 1

var check = 0;
var emailArray = ["demo@gmail.com", "demo1@gmail.com", "demo2@gmail.com","demo4@gmail.com"];

var registeredEmail = (userEmail) =>{
  check = 0;
  emailArray.forEach((element) => {
    if (userEmail === element) {
      check = 1;
    }
  });
  if (check === 1) {
    console.log("Email already exist");
  } else {
    console.log("Signed Up Area");
  }
}


registeredEmail("demo1@gmail.com");
registeredEmail("demo5@gmail.com");
registeredEmail("demo2@gmail.com");



// Task 2

var email1 = "vinothrajan@gmail.com";
var splitted = email1.split("@");
// console.log(splitted); //splitted here

// Get Unique Character
var splitEmail = [...new Set(splitted[0])].join('');

console.log(splitEmail,typeof(splitEmail))

var forty = (splitted[0].length * 40) / 100;
var fortyPercent = Math.floor(forty);

var counter = 0;

var password = "rajan";
// var password = "ra";
// var password = "razz";
// var password = "irva";
var arrPwd = password;

for (let i = 0; i < splitEmail.length; i++) {
  for (let j = 0; j < arrPwd.length; j++) {
    if (splitEmail[i] === arrPwd[j]) {
      counter++;
    }
  }
}

if (fortyPercent < counter) {
  console.log("You cannot signup with email with this password");
} else {
  console.log("Signed Up Successfully");
}
