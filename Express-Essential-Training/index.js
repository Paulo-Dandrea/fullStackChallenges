const express = require("express");
const data = require("./data/MOCK_DATA.json");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send(`a get request with / route on port ${PORT}`); // %s doesn't work here
});

app.post("/newItem", (req, res) => {
  res.send(`a post request with /newItem route on port ${PORT}`);
});

app.put("/item", (req, res) => {
  res.send(`a put request with /item route on port ${PORT}`);
});

app.delete("/item", (req, res) => {
  res.send(`a delete request with /item route on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log("Your server is running on port %s ", PORT);
  // console.log(data);
});
