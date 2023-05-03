const express = require("express");
const paymentRouter = express.Router();

const paymentController = require("../controllers/payment-controller");

//get all payments
paymentRouter.get("/", paymentController.getAllpayments);
// Save new payment
paymentRouter.post("/",paymentController.createPayment);
//update Payment by ID.
paymentRouter.put("/",paymentController.updatePayment);
//delete Payment by ID
paymentRouter.delete("/",paymentController.deletePayment);
//get all payments by id user
paymentRouter.get("/filter/:id",paymentController.findpaymentsByIdUser);

//get all statuspayments
paymentRouter.get("/statusPayment", paymentController.getAllstatuspayments);
// Save new statuspayment
paymentRouter.post("/statusPayment",paymentController.createStatusPayment);
//update statusPayment by ID.
paymentRouter.put("/statusPayment",paymentController.updateStatusPayment);
//delete statusPayment by ID
paymentRouter.delete("/statusPayment",paymentController.deleteStatusPayment);

//get all paymenttypes
paymentRouter.get("/paymentType", paymentController.getAllpaymenttypes);
// Save new paymenttype
paymentRouter.post("/paymentType",paymentController.createPaymentType);
//update paymentType by ID.
paymentRouter.put("/paymentType",paymentController.updatePaymentType);
//delete paymentType by ID
paymentRouter.delete("/paymentType",paymentController.deletePaymentType);

//get magazine
paymentRouter.get("/magazine",paymentController.magazine)
//get shmuaa
paymentRouter.get("/shmuaa",paymentController.shmuaa)



module.exports = paymentRouter;