import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Accessing the home page");
  res.send("Hello");
})

app.get("/contact", (req, res) => {
  console.log("Accessing the contact page");
  res.send("Contact");
})

app.get("/about", (req, res) => {
  console.log("Accessing about page");
  res.send("About");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})