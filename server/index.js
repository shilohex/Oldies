// var http = require("http");

// http
//   .createServer(function (req, res) {
//     res.end("Hello world\n");
//   })
//   .listen(8081);
// console.log("Server listening on port 8081");

const express = require("express");
const cors = require("cors");

const app = express();
const port = 5001;
const countries = [
  {
    name: "India",
    capital: "New Delhi",
    population: 1350000000,
  },
  {
    name: "China",
    capital: "Beijing",
    population: 1350000000,
  },
  {
    name: "USA",
    capital: "Washington",
    population: 1350000000,
  },
  {
    name: "Japan",
    capital: "Tokyo",
    population: 1350000000,
  },
  {
    name: "Russia",
    capital: "Moscow",
    population: 1350000000,
  },
];

const users = [
  {
    Username: "teslim",
    password: "hjujksikl",
    email: "teslim@gmail.com",
    gender: "male",
    country: "india",
  },
  {
    Username: "shilo",
    password: "ujkeilsi347",
    email: "shilo@gmail.com",
    gender: "male",
    country: "china",
  },

  {
    Username: "muyi",
    password: "gtredchmkj456",
    email: "muyi@gmail.com",
    gender: "male",
    country: "usa",
  },
];

app.post("login", (req, res) => {
  const { Username, password } = req.body;
  const user = users.find(
    (user) => user.name === Username && user.password === password
  );

  if (user) {
    res.send(user);
  } else {
    res.status(401).send({ message: "Invalid Username and Password" });
  }
});

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.post("/login", (req, res) => {
  console.log("i got you");
  const { Username, password } = req.body;
  const user = users.find(
    (user) => user.name === Username && user.password === password
  );
  if (user) {
    res.send(user);
  } else {
    res.status(401).send({ message: "Invalid Username and Password" });
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
