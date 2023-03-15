const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/user-controller");

//get all users
userRouter.get("/", userController.getAllusers);
// Save new user
userRouter.post("/",userController.createUser);
//update User by ID.
userRouter.put("/",userController.updateUser);
//delete User by ID
userRouter.delete("/",userController.deleteUser);
//get all users by id
//.get("/:id",userController.findUsersById);

//get all roles
userRouter.get("/role", userController.getAllroles);
// Save new role
userRouter.post("/role",userController.createRole);
//update Role by ID.
userRouter.put("/role",userController.updateRole);
//delete Role by ID
userRouter.delete("/role",userController.deleteRole);



module.exports = userRouter;