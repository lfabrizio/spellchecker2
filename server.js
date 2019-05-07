const express = require("express");
const users = require("./data.js");
const getemail = require("./getemail.js");
const app = express();


// console.log(users);
// console.log("Email:", getemail( "Jason"));

app.use(express.static("public"));
app.get("/getemail", (req, res)=>{
  const name = req.query.name;
  const phone = req.query.phone;
  const email = getemail(users, name);
  res.send("Your email is: " + email + " and your phone is: " + phone);
});


// get user by index
app.get("/getuser", (req, res)=>{
  const index = req.query.index;
  const oneUser = users[index];
  res.send(oneUser);
});


app.get("/greet", (req, res)=>{
  const userName = req.query.user;
  res.send("Hello " + userName + "!");
});

app.get("/goodbye", (req, res)=>{
  const userName = req.query.user;
  res.send("Goodbye " + userName + "!");
});

app.get("/weather", (req, res)=>{
  const userName = req.query.user;
  res.send("How is the weather " + userName + "?");
});

const port = process.env.PORT;
app.listen(port, ()=>console.log(`Server listening on port ${port}`));
