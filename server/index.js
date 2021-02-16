const express = require('express')
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// Create express instance
const app = express()
// Require API routes
const hotels = require('./routes/hotel.routes')
const test = require('./routes/test.routes')

// Import API Routes
app.use(hotels)
app.use(test)

const options = {
  definition: {
    swagger: "2.0",
    basePath: "/api",
    info: {
      title: "API Documentation",
      version: "0.1.0",
      description:
        "This is a CRUD API application documented with Swagger"
    },
  },
  apis: ["./server/routes/*.js", "./server/models/*.js"],
};

const specs = swaggerJsdoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);
// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
