const express = require("express");
const permissionRouter = express.Router();

const permissionController = require("../controllers/permission-controller");

//get all permissions
permissionRouter.get("/", permissionController.getAllpermissions);
// Save new permission
permissionRouter.post("/",permissionController.createPermission);
//update Permission by ID.
permissionRouter.put("/",permissionController.updatePermission);
//delete Permission by ID
permissionRouter.delete("/",permissionController.deletePermission);

//get all Processs
permissionRouter.get("/process", permissionController.getAllProcesss);
// Save new Process
permissionRouter.post("/process",permissionController.createProcess);
//update Process by ID.
permissionRouter.put("/process",permissionController.updateProcess);
//delete Process by ID
permissionRouter.delete("/process",permissionController.deleteProcess);

//get all LevelPermissions
permissionRouter.get("/levelPermission", permissionController.getAlllevelPermissions);
// Save new LevelPermission
permissionRouter.post("/levelPermission",permissionController.createLevelPermission);
//update LevelPermission by ID.
permissionRouter.put("/levelPermission",permissionController.updateLevelPermission);
//delete LevelPermission by ID
permissionRouter.delete("/levelPermission",permissionController.deleteLevelPermission);




module.exports = permissionRouter;