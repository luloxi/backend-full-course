// The address of this server connected to the network is:
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require("express");
const app = express();
const PORT = 8383;

let data = ["james"];

// Middleware
// Middleware is a function that has access to the request object (req),
// the response object (res), and the next middleware function
// in the application’s request-response cycle.
app.use(express.json());

// ENDPOINT - HTTP VERBS && Routes (or paths)
// The method informs the nature of request and the route is a further subdirectory
// (basically we direct the request to the body of code to respond appropiately,
// and these locations or routes are called endpoints)

// Type 1 - Website endpoints (these endpoints are for sending back html and they typically come
// when a user enters a url in a browser)

app.get("/", (req, res) => {
  // this is endpoint number 1 - /
  console.log("User requested the home page website");
  res.send(`
    <body style="background:pink; color: blue; ">
        <h1>DATA:</h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">Dashboard</a>
    </body>
    <script>console.log("This is my script")</script>
    `);
  //   console.log("Yay I hit an endpoint!", req.method);
  //   res.sendStatus(201);
});

app.get("/dashboard", (req, res) => {
  // this is endpoint number 2 - /dashboard
  //   console.log("Ohhh now I hit the /dashboard endpoint!");
  //   res.send("Hi");
  res.send(`
    <body>
    <h1>Dashboard</h1>
    <a href='/'>Home</a>
    </body>
    `);
});

// Type 2 - API Endpoints (non visual)

// CRUD-method - Create-POST Read-GET Update-PUT and Delete-DELETE

app.get("/api/data", (req, res) => {
  console.log("This one was for data");
  res.status(201).send(data);
});

app.post("/api/data", (req, res) => {
  // someone wants to create a user (for example when they click a sign up button)
  // the user clicks the sign up button after entering their credentials,
  // and their browser is wired up to send out a network request to the server
  // to handle that action
  const newEntry = req.body;
  console.log(newEntry);
  data.push(newEntry.name);
  res.sendStatus(201);
});

app.delete("/api/data", (req, res) => {
  data.pop();
  console.log("We deleted the element off the end of the array");
  res.sendStatus(203);
});

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
