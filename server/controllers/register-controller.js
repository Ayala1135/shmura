const db = require("../models/index.js");
const Op = db.Sequelize.Op;
const Register = db.register;
const StatusRegister = db.statusregister;


//get all registers
exports.getAllregisters = (req, res) => {
    Register.findAll({
        include:[{model: db.user},{model: db.project},{model: db.statusregister}],
        raw: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all registers."
            });
        });
};

//Save new register
exports.createRegister = async (req, res) => {
    const { idRegister, idProject, idUser, statusRegister } = req.body;
    //if(!dateAttendance)
    //return res.status(400).json({ message: 'date Attendance is required' })
    var newRegister = await Register.create(req.body);
    if (newRegister)
        return res.status(201).json({ message: 'New Register created' });
    else
        return res.status(400).json({ message: 'Invalid Register data received' });
}

//update Register by ID.
exports.updateRegister = (req, res) => {
    const idRegister = req.body.idRegister;
    Register.update(req.body, {
        where: { idRegister: idRegister }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "register was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update register with id=${idRegister}. Maybe register was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating register with id=" + idRegister
            });
        });
};

//delete Register by ID
exports.deleteRegister = (req, res) => {
    const idRegister = req.body.idRegister;

    Register.destroy({
        where: { idRegister: idRegister }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Register was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Register with id=${idRegister}. Maybe Register was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Register with id=" + idRegister
            });
        });
};


//get all register by id user
exports.findRegisterByIdUser = (req, res) => {
    const currentId = req.params.id;
    var condition = currentId ? { idUser: { [Op.like]: `%${currentId}%` } } : null;
    Register.findAll({
        where: condition,
        include:[{model: db.user},{model: db.project},{model: db.statusregister}],
        raw: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all register by id user."
            });
        });
};

//get all statusregisters
exports.getAllstatusregisters = (req, res) => {
    StatusRegister.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all statusregisters."
            });
        });
};

//Save new statusregister
exports.createStatusRegister = async (req, res) => {
    const { idStatusRegister, descriptionStatusRegister } = req.body;
    //if(!dateAttendance)
    //return res.status(400).json({ message: 'date Attendance is required' })
    var newStatusRegister = await StatusRegister.create(req.body);
    if (newStatusRegister)
        return res.status(201).json({ message: 'New StatusRegister created' });
    else
        return res.status(400).json({ message: 'Invalid StatusRegister data received' });
}

//update StatusRegister by ID.
exports.updateStatusRegister = (req, res) => {
    const idStatusRegister = req.body.idStatusRegister;
    StatusRegister.update(req.body, {
        where: { idStatusRegister: idStatusRegister }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "statusregister was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update statusregister with id=${idStatusRegister}. Maybe statusregister was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating statusregister with id=" + idStatusRegister
            });
        });
};

//delete StatusRegister by ID
exports.deleteStatusRegister = (req, res) => {
    const idStatusRegister = req.body.idStatusRegister;

    StatusRegister.destroy({
        where: { idStatusRegister: idStatusRegister }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "StatusRegister was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete StatusRegister with id=${idStatusRegister}. Maybe StatusRegister was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete StatusRegister with id=" + idStatusRegister
            });
        });
};