// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node Js project with express and mongo db",
      version: "1.0.0",
      description: "A simple Express API with Swagger documentation",
    },
    servers:[
        {url:'http://localhost:3000'}
    ]
  },
  apis: ["./routes/testRoute.js"], // Path to your API routes
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};
