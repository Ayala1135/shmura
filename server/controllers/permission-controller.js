const db = require("../models/index.js");
const Op = db.Sequelize.Op;
const Permission = db.permission;
const Process = db.process;
const LevelPermission = db.levelpermission;

//get all permissions
exports.getAllpermissions = (req, res) => {
    Permission.findAll({
        include:[{model: db.user},{model: db.levelpermission},{model: db.process}],
        raw: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all permissions."
            });
        });
};

//Save new permission
exports.createPermission = async(req, res) => {
    const{idpermission,levelPermission,idUser,idProcess} = req.body;
    //if(!dateAttendance)
        //return res.status(400).json({ message: 'date Attendance is required' })
    var newPermission = await Permission.create(req.body);
    if(newPermission)
        return res.status(201).json({ message: 'New Permission created'});
    else
        return res.status(400).json({ message: 'Invalid Permission data received' });
}

//update Permission by ID.
exports.updatePermission = (req, res) => {
    const idpermission = req.body.idpermission;
    Permission.update(req.body, {
        where: { idpermission: idpermission }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "permission was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update permission with id=${idpermission}. Maybe permission was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating permission with id=" + idpermission
            });
        });
};

//delete Permission by ID
exports.deletePermission = (req, res) => {
    const idpermission = req.body.idpermission;

    Permission.destroy({
        where: { idpermission: idpermission }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Permission was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Permission with id=${idpermission}. Maybe Permission was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Permission with id=" + idpermission
            });
        });
};


//get all processs
exports.getAllProcesss = (req, res) => {
    Process.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all processs."
            });
        });
};

//Save new process
exports.createProcess = async (req, res) => {
    const { idProcess, descriptionProcess } = req.body;
    //if (!processEmail)
        //return res.status(400).json({ message: 'process Email is required' })
    var newProcess = await Process.create(req.body);
    if (newProcess)
        return res.status(201).json({ message: 'New process created' });
    else
        return res.status(400).json({ message: 'Invalid process data received' });
}

//update Process by ID.
exports.updateProcess = (req, res) => {
    const idProcess = req.body.idProcess;
    Process.update(req.body, {
        where: { idProcess: idProcess }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "process was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update process with id=${idProcess}. Maybe process was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating process with id=" + idProcess
            });
        });
};

//delete Process by ID
exports.deleteProcess = (req, res) => {
    const idProcess = req.body.idProcess;
    Process.destroy({
        where: { idProcess: idProcess }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Process was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Process with id=${idProcess}. Maybe Process was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Process with id=" + idProcess
            });
        });
};

//get all levelPermissions
exports.getAlllevelPermissions = (req, res) => {
    LevelPermission.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all levelPermissions."
            });
        });
};

//Save new levelPermission
exports.createLevelPermission = async(req, res) => {
    const{idlevelpermission,descriptionlevelpermission} = req.body;
    //if(!dateAttendance)
        //return res.status(400).json({ message: 'date Attendance is required' })
    var newLevelPermission = await LevelPermission.create(req.body);
    if(newLevelPermission)
        return res.status(201).json({ message: 'New LevelPermission created'});
    else
        return res.status(400).json({ message: 'Invalid LevelPermission data received' });
}

//update LevelPermission by ID.
exports.updateLevelPermission = (req, res) => {
    const idlevelpermission = req.body.idlevelpermission;
    LevelPermission.update(req.body, {
        where: { idlevelpermission: idlevelpermission }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "levelPermission was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update levelPermission with id=${idlevelpermission}. Maybe levelPermission was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating levelPermission with id=" + idlevelpermission
            });
        });
};

//delete LevelPermission by ID
exports.deleteLevelPermission = (req, res) => {
    const idlevelpermission = req.body.idlevelpermission;

    LevelPermission.destroy({
        where: { idlevelpermission: idlevelpermission }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "LevelPermission was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete LevelPermission with id=${idlevelpermission}. Maybe LevelPermission was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete LevelPermission with id=" + idlevelpermission
            });
        });
};

