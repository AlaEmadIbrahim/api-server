"use strict";

require("dotenv").config();
const server = require("./src/server");
const { db } = require("./src/models/index");
let PORT = process.env.PORT || 3000;

db.sync()
  .then(() => {
    server.start(PORT);
  })
  .catch(console.error);
