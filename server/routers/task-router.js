const express = require("express");
const taskRouter = express.Router();

const taskController = require("../controllers/task-controller");

//get all tasks
taskRouter.get("/", taskController.getAlltasks);
// Save new task
taskRouter.post("/",taskController.createTask);
//update Task by ID.
taskRouter.put("/",taskController.updateTask);
//delete Task by ID
taskRouter.delete("/",taskController.deleteTask);

//get all typetasks
taskRouter.get("/typeTask", taskController.getAllTypetasks);
// Save new typetask
taskRouter.post("/typeTask",taskController.createTypetask);
//update typeTask by ID.
taskRouter.put("/typeTask",taskController.updateTypetask);
//delete typeTask by ID
taskRouter.delete("/typeTask",taskController.deleteTypetask);

//get all statustasks
taskRouter.get("/statusTask", taskController.getAllStatustasks);
// Save new statustask
taskRouter.post("/statusTask",taskController.createStatustask);
//update statusTask by ID.
taskRouter.put("/statusTask",taskController.updateStatustask);
//delete statusTask by ID
taskRouter.delete("/statusTask",taskController.deleteStatustask);




module.exports = taskRouter;