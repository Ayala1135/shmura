const express = require("express");
const registerRouter = express.Router();

const registerController = require("../controllers/register-controller");

//get all registers
registerRouter.get("/", registerController.getAllregisters);
// Save new register
registerRouter.post("/",registerController.createRegister);
//update Register by ID.
registerRouter.put("/",registerController.updateRegister);
//delete Register by ID
registerRouter.delete("/",registerController.deleteRegister);

//get all statusregisters
registerRouter.get("/statusRegister", registerController.getAllstatusregisters);
// Save new statusregister
registerRouter.post("/statusRegister",registerController.createStatusRegister);
//update statusRegister by ID.
registerRouter.put("/statusRegister",registerController.updateStatusRegister);
//delete statusRegister by ID
registerRouter.delete("/statusRegister",registerController.deleteStatusRegister);




module.exports = registerRouter;