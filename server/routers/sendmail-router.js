const express = require("express");
const sendmailRouter = express.Router();

const sendmailController = require("../controllers/sendmail-controller");

//get all sendmails
sendmailRouter.get("/", sendmailController.getAllsendmails);
// Save new sendmail
sendmailRouter.post("/",sendmailController.createSendmail);
//update Sendmail by ID.
sendmailRouter.put("/",sendmailController.updateSendmail);
//delete Sendmail by ID
sendmailRouter.delete("/",sendmailController.deleteSendmail);




module.exports = sendmailRouter;