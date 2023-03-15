const express = require("express");
const filterRouter = express.Router();

const filterController = require("../controllers/filter-controller");

filterRouter.get("/", filterController.filter);



module.exports = filterRouter;