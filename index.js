let express = require('express');
let app = express();

//Function to return a welcome message
function getWelcomeMessage() {
  return "Welcome to our Service!";
}

//Endpoint 1: Returns a welcome message
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

//Function to return a greeting message
function getGreetingMessage(username) {
  return "Hello, " + username + "!";
}

//Endpoint 2: Returns a greeting message
app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

//Funtion to check if a password is strong or weak
function checkPasswordStrength(password) {
  if(password.length > 15) {
    return "Password is Strong";
  }else {
    return "Password is Weak";
  }
}

//Endpoint 3:Check if a password is strong or weak
app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});

//Function to return the sum of two numbers
function getSum(num1, num2) {
  return num1 + num2;
}

//Endpoint 4: Returns the sum of two numbers
app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);

  res.send(getSum(num1, num2).toString());
});

//Function to returns a message if the user is subscribed or not
function getSubscriptionStatus(username, isSubscribed) {
  if(isSubscribed === "true") {
    return username + " is subscribed";
  }else {
    return username + " is not subscribed";
  }
}

//Endpoint 5: Returns a message if the user is subscribed or not
app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;

  res.send(getSubscriptionStatus(username, isSubscribed));
});

//Function to returns the final price after discount
function getDiscountedPrice(price, discount) {
  return price - (price * (discount / 100));
}

//Endpoint 6: Returns the final price after discount
app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);

  res.send(getDiscountedPrice(price, discount).toString());
});

//Function to returns a personalized greeting message
function getPersonalizedGreeting(name, age, gender) {
  return "Hello, " + name + "! You are a " + age + " year old " + gender;
}

//Endpoint 7: Returns a personalized greeting message
app.get("/personalized-greeting", (req, res) => {
  let name = req.query.name;
  let age = parseInt(req.query.age).toString();
  let gender = req.query.gender;

  res.send(getPersonalizedGreeting(name, age, gender));
});

//Function to returns the final price after applying discount and tax
function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - (price * (discount / 100));
  return discountedPrice + (discountedPrice * (tax / 100));
}

//Endpoint 8: Returns the final price after applying discount and tax
app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);

  res.send(getFinalPrice(price, discount, tax).toString());
});

//Function to returns the total exercise time
function getTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

//Endpoint 9: Returns the total exercise time
app.get("/total-exercise-time", (req, res) => {
  let running = parseInt(req.query.running);
  let cycling = parseInt(req.query.cycling);
  let swimming = parseInt(req.query.swimming);

  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:", PORT);
});