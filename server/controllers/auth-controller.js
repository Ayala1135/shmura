const db = require('../models/index.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userController = require("../controllers/user-controller");


const User = db.user

const login = async (req, res) => {
    console.log(req.body)
    const { userEmail, userPassword } = req.body
    if (!userEmail || !userPassword)
        return res.status(400).json({ message: 'דואר אלקטרוני וסיסמה הם שדות חובה' })
    const foundUser = await User.findOne({ where: { userEmail: userEmail } })
    if (!foundUser)
        return res.status(401).json({ message: 'משתמש לא רשום' })
    let data = "";
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(userPassword, salt, function (err, hash) {
            data = hash;
            bcrypt.compare(userPassword, data, function (err, res) {});           
        });
    });
    // const userInfo = {
    //     userName: foundUser.userName, userAddress: foundUser.userAddress, userCity: foundUser.userCity,
    //     userPhone: foundUser.userPhone, userEmail: foundUser.userEmail,
    //     userRole: foundUser.userRole, userPassword: foundUser.userPassword
    // };
    // //Create the token
    // //const accessToken= jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET)
    // //res.setHeader('Authorization', `Bearer ${accessToken}`)
    // //res.json({ accessToken: accessToken })
    res.send(foundUser)
}
const register = async (req, res) => {
    const { userFirstName, userLastName, userStreet, userStreetNumber, userCity, userBirthday, userPhone, userEmail, userRole, userPassword, userStudyPlace, userGraduationYear, userJoiningDate, userJob, userBusiness } = req.body;
    if (!userEmail || !userPassword)
        return res.status(400).json({ message: 'דואר אלקטרוני וסיסמה הם שדות חובה' })
    const duplicate = await User.findOne({ where: { userEmail: userEmail } })
    if (duplicate)
        return res.status(409).json({ message: "דואר אלקטרוני זה כבר קיים במערכת" })
    const hashedPwd = await bcrypt.hash(userPassword, 10);
    req.body = { userFirstName, userLastName, userStreet, userStreetNumber, userCity, userBirthday, userPhone, userEmail, userRole, userPassword, userStudyPlace, userGraduationYear, userJoiningDate, userJob, userBusiness};
    userController.createUser(req.body,res);
}




module.exports = { login, register }
