const express = require("express");
const cors = require('cors');
//const cron = require('node-cron');
const mails = require("./services/mails.js");

const userRouter = require("./routers/user-router.js")
const partnerRouter = require("./routers/partner-router.js")
const permissionRouter = require("./routers/permission-router")
const paymentRouter = require("./routers/payment-router")
const registerRouter = require("./routers/register-router")
const taskRouter = require("./routers/task-router")
const projectRouter = require("./routers/project-router")
const attendanceRouter = require("./routers/attendance-router")
const sendmailRouter = require("./routers/sendmail-router")

const filterRouter = require("./routers/filter-router")
const authRouter = require("./routers/auth-router")

const app = express()
const PORT = process.env.PORT || 8000
app.use(express.json())
app.use(cors());
/*
app.use(cors({
origin: 'http://localhost:5000'
}));
*/

app.use("/user", userRouter)
app.use("/partner", partnerRouter)
app.use("/permission", permissionRouter)
app.use("/payment", paymentRouter)
app.use("/register", registerRouter)
app.use("/task", taskRouter)
app.use("/project", projectRouter)
app.use("/attendance", attendanceRouter)
app.use("/sendmail", sendmailRouter)

app.use("/filter", filterRouter)
app.use("/auth", authRouter)

//***function to send mails to rejection payment.***
// function sendToRejections()
// {
//     //idSendmail,idUser,sendDate,idPayment
//     const rejectionsList = [];
//     //var curDate = new date();
//     rejectionsList.forEach(element => {
//         //createSendmail(element.idUser,curDate,?)
//         mails.sendEmail(element.userEmail, `${element.userName} התגלתה בעיה בתשלום למערכת "שמורה"`, "אנא בדקי את פרטי התשלום...");
//     });
// }

app.listen(PORT, () => console.log(`server running on port ${PORT}`))