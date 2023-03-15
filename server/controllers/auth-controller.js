const db = require('../models/index.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userController = require("../controllers/user-controller");


const User = db.user

const login = async (req, res) => {
    const { userEmail, userPassword } = req.body
    if (!userEmail || !userPassword)
        return res.status(400).json({ message: 'All fields are required' })
    const foundUser = await User.findOne({ where: { userEmail: userEmail } })
    if (!foundUser)
        return res.status(401).json({ message: 'Unauthorized' })
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
    res.send("Logged In")
}
const register = async (req, res) => {
    const { userName, userAddress, userCity, userPhone, userEmail, userRole, userPassword, userStudyPlace, userJoiningDate, userJob, userAge } = req.body;
    if (!userEmail || !userPassword)
        return res.status(400).json({ message: 'All fields are required' })
    const duplicate = await User.findOne({ where: { userEmail: userEmail } })
    if (duplicate)
        return res.status(409).json({ message: "Duplicate user's email" })
    const hashedPwd = await bcrypt.hash(userPassword, 10);
    req.body = { userName, userAddress, userCity, userPhone, userEmail, userRole, userPassword: hashedPwd, userStudyPlace, userJoiningDate, userJob, userAge};
    userController.createUser(req.body,res);
}




module.exports = { login, register }
