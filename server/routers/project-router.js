const express = require("express");
const projectRouter = express.Router();

const projectController = require("../controllers/project-controller");

//get all projects
projectRouter.get("/", projectController.getAllprojects);
// Save new project
projectRouter.post("/",projectController.createProject);
//update Project by ID.
projectRouter.put("/",projectController.updateProject);
//delete Project by ID
projectRouter.delete("/",projectController.deleteProject);




module.exports = projectRouter;