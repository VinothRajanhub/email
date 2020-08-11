// Task 1

var check = 0;
var emailArray = ["demo@gmail.com", "demo1@gmail.com", "demo2@gmail.com"];

var registeredEmail = (userEmail) =>{
  check = 0;
  emailArray.forEach((element) => {
    if (userEmail == element) {
      check = 1;
    }
  });
  if (check == 1) {
    console.log("Email already exist");
  } else {
    console.log("Signed Up Area");
  }
}


registeredEmail("demo1@gmail.com");
registeredEmail("demo4@gmail.com");
registeredEmail("demo2@gmail.com");



// Task 2

var email1 = "vinothrajan@gmail.com";
var splitted = email1.split("@");
// console.log(splitted); //splitted here
var splitEmail = splitted[0];

var forty = (splitted[0].length * 40) / 100;
// console.log(Math.floor(forty));

var counter = 0;

var password = "rajan";
// var password = "ra";
// var password = "razz";
var arrPwd = password;

for (let i = 0; i < splitEmail.length; i++) {
  let nameStart = i;
  for (let j = 0; j < arrPwd.length; j++) {
    if (splitEmail[nameStart] === arrPwd[j]) {
      counter++;
    }
    nameStart++;
  }
}

if (forty < counter) {
  console.log("You cannot signup with email with this password");
} else {
  console.log("Signed Up Successfully");
}
