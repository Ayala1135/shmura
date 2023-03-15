const db = require("../models/index.js");
const Op = db.Sequelize.Op;
const Project = db.project;


//get all projects
exports.getAllprojects = (req, res) => {
    Project.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all projects."
            });
        });
};

//Save new project
exports.createProject = async(req, res) => {
    const{idProject,startProject,endProject,placeProject,descriptionProject,startRegister,endRegister} = req.body;
    //if(!dateAttendance)
        //return res.status(400).json({ message: 'date Attendance is required' })
    var newProject = await Project.create(req.body);
    if(newProject)
        return res.status(201).json({ message: 'New Project created'});
    else
        return res.status(400).json({ message: 'Invalid Project data received' });
}

//update Project by ID.
exports.updateProject = (req, res) => {
    const idProject = req.body.idProject;
    Project.update(req.body, {
        where: { idProject: idProject }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "project was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update project with id=${idProject}. Maybe project was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating project with id=" + idProject
            });
        });
};

//delete Project by ID
exports.deleteProject = (req, res) => {
    const idProject = req.body.idProject;

    Project.destroy({
        where: { idProject: idProject }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Project was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Project with id=${idProject}. Maybe Project was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Project with id=" + idProject
            });
        });
};