const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Mario");
});

app.get("/register", (req, res) => {
  res.send("Register");
});

app.get("/login", (req, res) => {
     res.send("Login");
});

app.get("/forgot-password", (req, res) => {
     res.send("Forgot Password");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
