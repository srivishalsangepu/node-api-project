import {
  addNewUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/testController";
// import express from "express";
// const swaggerJsdoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
// const app = express();
// const PORT = 3000;
// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Node Js project with express and mongo db",
//       version: "1.0.0",
//       description: "A simple Express API with Swagger documentation",
//     },
//     servers: [{ url: "http://localhost:3000" }],
//   },
//   apis: ["./routes/testRoute.js"], // Path to your API routes
// };

// const specs = swaggerJsdoc(options);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const routes = (app) => {
  app
    .route("/test")
    /**
     * @swagger
     * /test:
     *       get:
     *           summary: Returns a sample message
     *           responses:
     *              200:
     *                  description: A successful response
     */
    .get((req, res, next) => {
      next();
    }, getUser)
    /**
     * @swagger
     * /test:
     *       post:
     *           summary: Inserts user info
     *           responses:
     *              200:
     *                  description: Record inserted successfully
     */
    .post(addNewUser);

  app.route("/test/:id").get(getUserById).put(updateUser).delete(deleteUser);

  app.route("/sample").get((req, res) => {
    res.json({ message: "This is a sample message" });
  });
};

export default routes;
