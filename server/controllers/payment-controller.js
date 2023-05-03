const db = require("../models/index.js");
const { Op } = require("sequelize");
const Payment = db.payment;
const PaymentType = db.paymenttype;
const StatusPayment = db.statuspayment;
const User = db.user;



//get all payments
exports.getAllpayments = (req, res) => {
    Payment.findAll({
        include:[{model: User},{model: StatusPayment},{model: PaymentType},{model: db.project}],      
        raw: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all payments."
            });
        });
};

//Save new payment
exports.createPayment = async (req, res) => {
    const { idpayment, paymenttype, startPayment, endPayment, userId, paymentStatus, idProject, amountPayment } = req.body;
    //if(!dateAttendance)
    //return res.status(400).json({ message: 'date Attendance is required' })
    var newPayment = await Payment.create(req.body);
    if (newPayment)
        return res.status(201).json({ message: 'New Payment created' });
    else
        return res.status(400).json({ message: 'Invalid Payment data received' });
}

//update Payment by ID.
exports.updatePayment = (req, res) => {
    const idpayment = req.body.idpayment;
    Payment.update(req.body, {
        where: { idpayment: idpayment }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "payment was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update payment with id=${idpayment}. Maybe payment was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating payment with id=" + idpayment
            });
        });
};

//delete Payment by ID
exports.deletePayment = (req, res) => {
    const idpayment = req.body.idpPayment;

    Payment.destroy({
        where: { idpayment: idpayment }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Payment was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Payment with id=${idpayment}. Maybe Payment was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Payment with id=" + idpayment
            });
        });
};

//get all payments by id user
exports.findpaymentsByIdUser = (req, res) => {
    const currentId = req.params.id;
    var condition = currentId ? { userId: { [Op.like]: `%${currentId}%` } } : null;
    Payment.findAll({
        where: condition,
        include:[{model: User},{model: StatusPayment},{model: PaymentType},{model: db.project}],
        raw: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all payments by id user."
            });
        });
};

//get all statuspayments
exports.getAllstatuspayments = (req, res) => {
    StatusPayment.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all statuspayments."
            });
        });
};

//Save new statuspayment
exports.createStatusPayment = async (req, res) => {
    const { idstatusPayment, paymentDescription } = req.body;
    //if(!dateAttendance)
    //return res.status(400).json({ message: 'date Attendance is required' })
    var newStatusPayment = await StatusPayment.create(req.body);
    if (newStatusPayment)
        return res.status(201).json({ message: 'New StatusPayment created' });
    else
        return res.status(400).json({ message: 'Invalid StatusPayment data received' });
}

//update StatusPayment by ID.
exports.updateStatusPayment = (req, res) => {
    const idstatusPayment = req.body.idstatusPayment;
    StatusPayment.update(req.body, {
        where: { idstatusPayment: idstatusPayment }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "statuspayment was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update statuspayment with id=${idstatusPayment}. Maybe statuspayment was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating statuspayment with id=" + idstatusPayment
            });
        });
};

//delete StatusPayment by ID
exports.deleteStatusPayment = (req, res) => {
    const idstatusPayment = req.body.idstatusPayment;

    StatusPayment.destroy({
        where: { idstatusPayment: idstatusPayment }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "StatusPayment was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete StatusPayment with id=${idstatusPayment}. Maybe StatusPayment was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete StatusPayment with id=" + idstatusPayment
            });
        });


};

//get all paymenttypes
exports.getAllpaymenttypes = (req, res) => {
    PaymentType.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all paymenttypes."
            });
        });
};

//Save new paymenttype
exports.createPaymentType = async (req, res) => {
    const { idpaymenttype, descriptionpaymenttype } = req.body;
    //if(!dateAttendance)
    //return res.status(400).json({ message: 'date Attendance is required' })
    var newPaymentType = await PaymentType.create(req.body);
    if (newPaymentType)
        return res.status(201).json({ message: 'New PaymentType created' });
    else
        return res.status(400).json({ message: 'Invalid PaymentType data received' });
}

//update PaymentType by ID.
exports.updatePaymentType = (req, res) => {
    const idpaymenttype = req.body.idpaymenttype;
    PaymentType.update(req.body, {
        where: { idpaymenttype: idpaymenttype }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "paymenttype was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update paymenttype with id=${idpaymenttype}. Maybe paymenttype was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating paymenttype with id=" + idpaymenttype
            });
        });
};

//delete PaymentType by ID
exports.deletePaymentType = (req, res) => {
    const idpaymenttype = req.body.idpaymenttype;

    PaymentType.destroy({
        where: { idpaymenttype: idpaymenttype }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "PaymentType was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete PaymentType with id=${idpaymenttype}. Maybe PaymentType was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete PaymentType with id=" + idpaymenttype
            });
        });


};



exports.shmuaa = async (req, res) => {
    try {
        //const now = new DATE();
        const users = await db.user.findAll({
            include: [{
                model: db.payment,
                attributes: [],
                where: {
                    [Op.and]:
                        [db.sequelize.literal('(amountPayment * (DATEDIFF(MONTH,endPayment,startPayment) >= 120) AND  (MONTH(startPayment) +12 < MONTH(GETDATE()))')]
                }
            }]
        });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving user data');
    }
};




// exports.magazine = async (req, res) => {
//     try {
//         // const now = new DATE();
//         const users = await db.user.findAll({
//             attributes: [ 'userName', 'userAddress', 'userCity', 'userPhone', 'userEmail', 'userRole', 'userPassword', 'userStudyPlace', 'userJoiningDate', 'userJob', 'userAge'],
//             include: [{
//                 model: Payment,
//                 attributes: [],
//                 where: {
//                     [Op.or]:
//                         [
//                             {
//                                 [Op.and]:
//                                     [{ 'amountPayment': Payment.amountPayment * db.sequelize.literal('select DATEDIFF(MONTH,endPayment,startPayment) from Payment')  >= 360},
//                                     { 'amountPayment': Payment.amountPayment * db.sequelize.literal('select DATEDIFF(MONTH,endPayment,startPayment) from Payment') < 720},
//                                     { 'startPayment': db.sequelize.literal('SELECT * FROM Payment WHERE (YEAR(startPayment) = YEAR(CURRENT_DATE()) OR (MONTH(startPayment) >= MONTH(CURRENT_DATE()) AND (YEAR(startPayment) + 1 = YEAR(CURRENT_DATE()))))')}
                                        
                                      
                                      
//                                     ]
//                             },
//                             {
//                                 [Op.and]:
//                                 [{ 'amountPayment': Payment.amountPayment * db.sequelize.literal('select (DATEDIFF(MONTH,endPayment,startPayment) from Payment' >= 720) },
//                                 { 'startPayment': db.sequelize.literal('select * from Payment where (MONTH(startPayment) + 24 < MONTH(CURRENT_DATE()))') }
//                                 ]
//                             }

//                             // db.sequelize.literal('(amountPayment * (DATEDIFF(MONTH,endPayment,startPayment) >= 360) AND (amountPayment * (DATEDIFF(MONTH,endPayment,startPayment) < 720) AND (MONTH(startPayment) +12 < MONTH(GETDATE()))'),
//                             // db.sequelize.literal('(amountPayment * (DATEDIFF(MONTH,endPayment,startPayment) >720) AND (MONTH(startPayment) +24 < MONTH(GETDATE()))')
//                         ]

//                 }
//             }]
//         });
//         res.json(users);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error retrieving user data');
//     }
// };



const eligibilityCondition = {
    [Op.or]: [
        {
        [Op.and]:
            [
            db.sequelize.literal('DATEDIFF(endPayment, startPayment) * amountPayment > 360'),
            db.sequelize.literal('DATEDIFF(endPayment, startPayment) * amountPayment < 720'),
            //{startPayment: {[Op.gt]: db.sequelize.literal('DATE_SUB(NOW(), INTERVAL 1 YEAR)')}}  
            ]
        },
        {
        [Op.and]:
            [
            db.sequelize.literal('DATEDIFF(endPayment, startPayment) * amountPayment > 720'),
            //{startPayment: {[Op.lte]: db.sequelize.literal('DATE_SUB(NOW(), INTERVAL 2 YEAR)')}}  
            ]
        }
    ]
    };


exports.magazine = async (req, res) => {
    try {
        const users = await db.user.findAll({
            include: [{
                model: db.payment,
                attributes: ['amountPayment'],
                where: {eligibilityCondition}
            }]
        });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving user data');
    }
};