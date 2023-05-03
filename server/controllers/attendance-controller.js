const db = require("../models/index.js");
const Op = db.Sequelize.Op;
const Attendance = db.attendance;


//get all attendances
exports.getAllattendances = (req, res) => {
    Attendance.findAll({
        include:[{
            model: db.user
        }],
        raw: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all attendances."
            });
        });
};

//Save new attendance
exports.createAttendance = async(req, res) => {
    const{idattendance,idUser,dateAttendance,startAttendance,endAttendance} = req.body;
    if(!dateAttendance)
        return res.status(400).json({ message: 'date Attendance is required' })
    var newAttendance = await Attendance.create(req.body);
    if(newAttendance)
        return res.status(201).json({ message: 'New Attendance created'});
    else
        return res.status(400).json({ message: 'Invalid Attendance data received' });
}

//update Attendance by ID.
exports.updateAttendance = (req, res) => {
    console.log(idattendance);
    Attendance.update(req.body, {
        where: { idattendance: idattendance }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "attendance was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update attendance with id=${idattendance}. Maybe attendance was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating attendance with id=" + idattendance
            });
        });
};

//delete Attendance by ID
exports.deleteAttendance = (req, res) => {
    const idattendance = req.body.idattendance;

    Attendance.destroy({
        where: { idattendance: idattendance }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Attendance was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Attendance with id=${idattendance}. Maybe Attendance was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Attendance with id=" + idattendance
            });
        });
};

//get attendance by id
exports.findAttendanceById = (req, res) => {
    const currentId = req.params.id;
    var condition = currentId ? { idUser: { [Op.like]: `%${currentId}%` } } : null;
    Attendance.findAll({include:[{model: db.user}], raw: true, where: condition })   
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all users by id."
            });
        });
};