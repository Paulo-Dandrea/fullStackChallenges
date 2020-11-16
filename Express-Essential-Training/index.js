const express = require("express");
const path = require('path');
const serveFavicon = require('serve-favicon');
const data = require("./data/MOCK_DATA.json");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
// http://localhost:3000/tent.jpg
app.use("/images", express.static("images"));
// http://localhost:3000/images/rocket.jpg // Aqui nós específicamos que o caminho
// inicial engloba images

app.use(serveFavicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.json()); // to parse everything to jason

app.get("/", (req, res) => {
  res.status(200).json(data);
});

// JSON data
// {"hello": "JSON IS cool"}
// URLEncoded data
// hello=URLEncoded+is+cool

app.post('/newItem', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})


app.get(
  "/item/:id",
  (req, res, next) => {
    // this is the middleware that pulls the data
    console.log(req.params.id);
    let userId = Number(req.params.id);
    let userJson = data.filter((e) => e.id === userId);
    // middleware that use the req object
      console.log(`request from: ${req.originalUrl}`);
      console.log(`request type: ${req.method}`);
    // Everything above is a middleware
    res.send(userJson); // You can only RESPONSE once per call of method
    next();
  },
  (req, res) => {
    console.log("did you get the right data?");
  },
);

app
  .route("/item")
  .get((req, res) => {
    // throw new Error();
    res.send(`a get request with /item route on port ${PORT}`);
    // res.end();//
    // res.redirect('http://linkedin.com');
    // res.download('images/rocket.jpg');
  })
  .put((req, res) => {
    res.send(`a put request with /newItem route on port ${PORT}`);
  })
  .delete((req, res) => {
    res.send(`a delete request with /item route on port ${PORT}`);
  });

  // Error handling function
  app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).send(`Red alert: ${err.stack}`);
  })

app.listen(PORT, () => {
  console.log("Your server is running on port %s ", PORT);
});
