const express = require("express");
const partnerRouter = express.Router();

const partnerController = require("../controllers/partner-controller");

//get all partners
partnerRouter.get("/", partnerController.getAllpartners);
// Save new partner
partnerRouter.post("/",partnerController.createPartner);
//update Partner by ID.
partnerRouter.put("/",partnerController.updatePartner);
//delete Partner by ID
partnerRouter.delete("/",partnerController.deletePartner);




module.exports = partnerRouter;