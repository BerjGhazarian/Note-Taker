const express = require("express").Router();

// Import our modular routers 
const apiRoutes = require("./notes");
const htmlRoutes = require("./htmlroutes");

express.use("/api", apiRoutes);
express.use("/", htmlRoutes);

module.exports = express;