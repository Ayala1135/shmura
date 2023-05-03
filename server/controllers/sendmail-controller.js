const db = require("../models/index.js");
const Op = db.Sequelize.Op;
const Sendmail = db.sendmail;


//get all sendmails
exports.getAllsendmails = (req, res) => {
    Sendmail.findAll({
        include:[{model: db.user},{model: db.payment}],        
        raw: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all sendmails."
            });
        });
};

//Save new Sendmail
exports.createSendmail = async(req, res) => {
    const{idSendmail,idUser,sendDate,idPayment} = req.body;
    //if(!dateAttendance)
        //return res.status(400).json({ message: 'date Attendance is required' })
    var newSendmail = await Sendmail.create(req.body);
    if(newSendmail)
        return res.status(201).json({ message: 'New Sendmail created'});
    else
        return res.status(400).json({ message: 'Invalid Sendmail data received' });
}

//update Sendmail by ID.
exports.updateSendmail = (req, res) => {
    const idSendmail = req.body.idSendmail;
    Sendmail.update(req.body, {
        where: { idSendmail: idSendmail }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "sendmail was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update sendmail with id=${idSendmail}. Maybe sendmail was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating sendmail with id=" + idSendmail
            });
        });
};

//delete Sendmail by ID
exports.deleteSendmail = (req, res) => {
    const idSendmail = req.body.idSendmail;

    Sendmail.destroy({
        where: { idSendmail: idSendmail }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sendmail was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Sendmail with id=${idSendmail}. Maybe Sendmail was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Sendmail with id=" + idSendmail
            });
        });
};