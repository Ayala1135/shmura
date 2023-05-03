const db = require("../models/index.js");
//const bcrypt = require("bcrypt");
const mails = require("../services/mails.js");
const readExcel = require('read-excel-file/node')
const Op = db.Sequelize.Op;
const User = db.user;
const Role = db.role;
var Excel = require('exceljs');
const xlsx = require('xlsx')


//get all users
exports.getAllusers = (req, res) => {

    // const file = reader.readFile('./test.xlsx')
    // const workbook = xlsx.readFile('./test.xlsx');
    // const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // const columnA = [];

    // for (let z in worksheet) {
    //   if(z.toString()[0] === 'A'){
    //     columnA.push(worksheet[z].v);
    //   }
    // }

    // console.log(columnA);

    //ליצור מערך של כל הכותורות הנדרשות, לעבור בפוקנציה הזאתי ולבדוק אם הרס במקום ה0 מוכל במערך, אם כן - פוש לדאטה ושליחה את הדאטה לקרייט יוזר
    // let obj = ['דואר אלקטרוני','שם פרטי','שם משפחה','שנת סיום לימודים','מקום לימודים','מקום עבודה','תחום עבודה','עיר','טלפון']
    // let data = []

    // const sheets = file.SheetNames

    // for(let i = 0; i < sheets.length; i++)
    // {
    //    const temp = reader.utils.sheet_to_json(
    //         file.Sheets[file.SheetNames[i]])
    //    temp.forEach((res) => {
    //     //if
    //     //   data.push(res)
    //     //   console.log(res)
    //    })
    // }

    // Printing data



    User.findAll({
        include: [{
            model: db.role
        }],
        raw: true
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all users."
            });
        });
};

//Save new user
exports.createUser = async (req, res) => {
    //const { userName, userAddress, userCity, userPhone, userEmail, userRole, userPassword } = req.body;
    var newUser = await User.create(req);
    if (newUser) {
        mails.sendEmail(req.userEmail, `${req.userFirstName} ${req.userLastName} היקרה! נרשמת בהצלחה למערכת "שמורה במבול". נשמח לראותך...`, "🌈☔");
        return res.status(201).json({ message: 'New user created' });
    }
    else
        return res.status(400).json({ message: 'Invalid user data received' });
}

//update User by ID.
exports.updateUser = (req, res) => {
    const idUser = req.body.idUser;
    User.update(req.body, {
        where: { idUser: idUser }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "user was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update user with id=${idUser}. Maybe user was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating user with id=" + idUser
            });
        });
};

//delete User by ID
exports.deleteUser = (req, res) => {
    const idUser = req.body.idUser;
    User.destroy({
        where: { idUser: idUser }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${idUser}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + idUser
            });
        });
};

//get users by id
exports.findUsersById = (req, res) => {
    const currentId = req.params.id;
    var condition = currentId ? { idUser: { [Op.like]: `%${currentId}%` } } : null;
    User.findAll({include:[{model: db.role}], raw: true, where: condition })   
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


//get all roles
exports.getAllroles = (req, res) => {
    Role.findAll({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while get all roles."
            });
        });
};

//Save new role
exports.createRole = async (req, res) => {
    const { idRole, roleDescription } = req.body;
    //if (!roleEmail)
    //return res.status(400).json({ message: 'role Email is required' })
    var newRole = await Role.create(req.body);
    if (newRole)
        return res.status(201).json({ message: 'New role created' });
    else
        return res.status(400).json({ message: 'Invalid role data received' });
}

//update Role by ID.
exports.updateRole = (req, res) => {
    const idRole = req.body.idRole;
    Role.update(req.body, {
        where: { idRole: idRole }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "role was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update role with id=${idRole}. Maybe role was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating role with id=" + idRole
            });
        });
};

//delete Role by ID
exports.deleteRole = (req, res) => {
    const idRole = req.body.idRole;
    Role.destroy({
        where: { idRole: idRole }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Role was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Role with id=${idRole}. Maybe Role was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Role with id=" + idRole
            });
        });
};



// async function login(req, res) {
//     const { userEmail, userPassword } = req.body;

//     try {
//         const user = await User.findOne({ where: { userEmail } });

//         if (!user) {
//             // User with this email not found
//             return res.status(401).json({ message: "Invalid Email. You can sign up" });
//         }

//         const isPasswordValid = await bcrypt.compare(userPassword, user.userPassword);

//         if (!isPasswordValid) {
//             // Incorrect password
//             return res.status(401).json({ message: "Invalid password. Try again" });
//         }
//         // Generate and send JWT token
//         const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
//         res.json({ token });
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Server error" });
//     }
// };





//const { Op } = require("sequelize");

// async function filterData(req, res) {
//   try {
//     //const model = req.app.get("model"); // Get the model from the app object
//     const { filter } = req.query; // Get the filter parameter from the query string

//     // Parse the filter parameter into an object
//     const parsedFilter = JSON.parse(filter);

//     // Construct the options object for the Sequelize find method
//     const options = {
//       where: parsedFilter,
//     };

//     // Find the data using the model and options
//     const data = await User.findAll(options);

//     res.status(200).json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// }



/*
const Payment = db.payment;

DATEDIFF
*/

/*
RU0071632177Z
+972-076-887-1216
171

*/







