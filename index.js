const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const schema = require("./grapql/schema/schema");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

mongoose.connect(process.env.database);

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
