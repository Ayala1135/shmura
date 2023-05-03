const express = require("express");
const attendanceRouter = express.Router();

const attendanceController = require("../controllers/attendance-controller");

//get all attendances
attendanceRouter.get("/", attendanceController.getAllattendances);
// Save new attendance
attendanceRouter.post("/",attendanceController.createAttendance);
//update Attendance by ID.
attendanceRouter.put("/",attendanceController.updateAttendance);
//delete Attendance by ID
attendanceRouter.delete("/",attendanceController.deleteAttendance);
//get attendance by id
attendanceRouter.get("/filter/:id",attendanceController.findAttendanceById);




module.exports = attendanceRouter;