const db = require("../models/index.js");
const Op = db.Sequelize.Op;
const Partner = db.partner;


//get all partners
exports.getAllpartners = (req, res) => {
    Partner.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all partners."
            });
        });
};

//Save new partner
exports.createPartner = async(req, res) => {
    const{idPartner,startPartner,endPartner,amountPerMonth} = req.body;
    //if(!dateAttendance)
        // res.status(400).json({ message: 'date Attendance is required' })
    var newPartner = await Partner.create(req.body);
    if(newPartner)
        return res.status(201).json({ message: 'New Partner created'});
    else
        return res.status(400).json({ message: 'Invalid Partner data received' });
}

//update Partner by ID.
exports.updatePartner = (req, res) => {
    const idPartner = req.body.idPartner;
    Partner.update(req.body, {
        where: { idPartner: idPartner }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "partner was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update partner with id=${idPartner}. Maybe partner was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating partner with id=" + idPartner
            });
        });
};

//delete Partner by ID
exports.deletePartner = (req, res) => {
    const idPartner = req.body.idPartner;

    Partner.destroy({
        where: { idPartner: idPartner }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Partner was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Partner with id=${idPartner}. Maybe Partner was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Partner with id=" + idPartner
            });
        });
};