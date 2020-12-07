const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type ${req.method}`);
      next(); // Neste caso, usando o next para passar para a próxima função que esteja dentro deste mesmo GET.gdd
    }, (req, res, next ) => {
      res.send("GET request successful!")
    })

    .post((req, res) => res.send("POST request successfull"));

  app.route('/contact/:contactID')
    .put((req, res) => 
    res.send(`PUT request successful! Contact ID: ${req.params.contactID} `))

    .delete((req, res) =>
    res.send("DELETE request successful!"));

};

module.exports = routes;