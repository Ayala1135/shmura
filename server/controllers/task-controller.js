const db = require("../models/index.js");
const Op = db.Sequelize.Op;
const Task = db.task;
const TypeTask = db.typetask;
const StatusTask = db.statustask;


//get all tasks
exports.getAlltasks = (req, res) => {
    Task.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all tasks."
            });
        });
};

//Save new Task
exports.createTask = async(req, res) => {
    const{idTask,idOpenUser,idDestinationUser,startTask,endTask,statusTask,typeTask,content,response} = req.body;
    //if(!dateAttendance)
        //return res.status(400).json({ message: 'date Attendance is required' })
    var newTask = await Task.create(req.body);
    if(newTask)
        return res.status(201).json({ message: 'New Task created'});
    else
        return res.status(400).json({ message: 'Invalid Task data received' });
}

//update Task by ID.
exports.updateTask = (req, res) => {
    const idTask = req.body.idTask;
    Task.update(req.body, {
        where: { idTask: idTask }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "task was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update task with id=${idTask}. Maybe task was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating task with id=" + idTask
            });
        });
};

//delete Task by ID
exports.deleteTask = (req, res) => {
    const idTask = req.body.idTask;

    Task.destroy({
        where: { idTask: idTask }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Task was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Task with id=${idTask}. Maybe Task was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Task with id=" + idTask
            });
        });
};

//get all typetasks
exports.getAllTypetasks = (req, res) => {
    TypeTask.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all typetasks."
            });
        });
};

//Save new Typetask
exports.createTypetask = async(req, res) => {
    const{idTypetask,descriptionTypetask} = req.body;
    //if(!dateAttendance)
        //return res.status(400).json({ message: 'date Attendance is required' })
    var newTypetask = await TypeTask.create(req.body);
    if(newTypetask)
        return res.status(201).json({ message: 'New Typetask created'});
    else
        return res.status(400).json({ message: 'Invalid Typetask data received' });
}

//update Typetask by ID.
exports.updateTypetask = (req, res) => {
    const idTypetask = req.body.idTypetask;
    TypeTask.update(req.body, {
        where: { idTypetask: idTypetask }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "typetask was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update typetask with id=${idTypetask}. Maybe statustypetask was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating typetask with id=" + idTypetask
            });
        });
};

//delete Typetask by ID
exports.deleteTypetask = (req, res) => {
    const idTypetask = req.body.idTypetask;

    TypeTask.destroy({
        where: { idTypetask: idTypetask }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Typetask was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Typetask with id=${idTypetask}. Maybe Typetypetask was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Typetask with id=" + idTypetask
            });
        });
};

//get all statustasks
exports.getAllStatustasks = (req, res) => {
    StatusTask.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all statustasks."
            });
        });
};

//Save new statustask
exports.createStatustask = async(req, res) => {
    const{idStatustask,descriptionStatustask} = req.body;
    //if(!dateAttendance)
        //return res.status(400).json({ message: 'date Attendance is required' })
    var newStatustask = await StatusTask.create(req.body);
    if(newStatustask)
        return res.status(201).json({ message: 'New Statustask created'});
    else
        return res.status(400).json({ message: 'Invalid Statustask data received' });
}

//update Typestatustask by ID.
exports.updateStatustask = (req, res) => {
    const idStatustask = req.body.idStatustask;
    StatusTask.update(req.body, {
        where: { idStatustask: idStatustask }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "statustask was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update statustask with id=${idStatustask}. Maybe statusstatustask was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating statustask with id=" + idStatustask
            });
        });
};

//delete Typestatustask by ID
exports.deleteStatustask = (req, res) => {
    const idStatustask = req.body.idStatustask;

    StatusTask.destroy({
        where: { idStatustask: idStatustask }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Statustask was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Statustask with id=${idStatustask}. Maybe Typestatustask was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Statustask with id=" + idStatustask
            });
        });
};