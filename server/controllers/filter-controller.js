const { Op } = require("sequelize");
const attendance = require("../models/attendance.js");
const db = require("../models/index.js");

const User = db.user;

// const concatForWhere = (wh, attribute_key, attribute_value) => {
//     if (attribute_value)
//         wh = wh[attribute_key] = attribute_value; 
//     console.log(attribute_key);
//     console.log(attribute_value);
// }

exports.filter = async (req, res) => 
{
    //let wh = {};
    // concatForWhere(wh, "idUser", req.body.idUser);
    // concatForWhere(wh, "userName", req.body.userName);  
    // concatForWhere(wh, "userAddress", req.body.userAddress); 
    // concatForWhere(wh, "userCity", req.body.userCity); 
    // concatForWhere(wh, "userPhone", req.body.userPhone); 
    // concatForWhere(wh, "userEmail", req.body.userEmail); 
    // concatForWhere(wh, "userRole", req.body.userRole); 
    // concatForWhere(wh, "userPassword", req.body.userPassword); 
    // concatForWhere(wh, "userStudyPlace", req.body.userStudyPlace); 
    // concatForWhere(wh, "userJoiningDate", req.body.userJoiningDate); 
    // concatForWhere(wh, "userJob", req.body.userJob); 
    // concatForWhere(wh, "userAge", req.body.userAge); 
    // concatForWhere(wh, "idattendance", req.body.dateAttendance); 
    // concatForWhere(wh, "dateAttendance", req.body.dateAttendance); 
    // concatForWhere(wh, "startAttendance", req.body.startAttendance); 
    // concatForWhere(wh, "endAttendance", req.body.endAttendance); 

    // concatForWhere(wh, "amountPerMonth", req.body.amountPerMonth); 

    // const qry = {};
    // qry.where = wh;
        // console.log("gfgf"+qry.where );
        //console.log("!!!!!!!!!!!"+wh[req.body.dateAttendance]);
    // res.send(await User.findAll(qry));
    // var x = req.body;

    const result = await User.findAll({
        //attributes: [ 'userName', 'userAddress', 'userCity', 'userPhone', 'userEmail', 'userRole', 'userPassword', 'userStudyPlace', 'userJoiningDate', 'userJob', 'userAge'],
        where: {
            [Op.or]:[{idUser: {[Op.eq]: req.body.idUser}}],
            [Op.or]:[{userFirstName: {[Op.eq]: req.body.userFirstName}}],
            [Op.or]:[{userLastName: {[Op.eq]: req.body.userLastName}}],
            [Op.or]:[{userStreet: {[Op.eq]: req.body.userStreet}}],
            [Op.or]:[{userStreetNumber: {[Op.eq]: req.body.userStreetNumber}}],
            [Op.or]:[{userCity: {[Op.eq]: req.body.userCity}}],
            [Op.or]:[{userBirthday: {[Op.eq]: req.body.userBirthday}}],
            [Op.or]:[{userPhone: {[Op.eq]: req.body.userPhone}}],
            [Op.or]:[{userEmail: {[Op.eq]: req.body.userEmail}}],
            [Op.or]:[{userRole: {[Op.eq]: req.body.userRole}}],
            [Op.or]:[{userPassword: {[Op.eq]: req.body.userPassword}}],
            [Op.or]:[{userStudyPlace: {[Op.eq]: req.body.userStudyPlace}}],
            [Op.or]:[{userGraduationYear: {[Op.eq]: req.body.userGraduationYear}}],
            [Op.or]:[{userJoiningDate: {[Op.eq]: req.body.userJoiningDate}}],
            [Op.or]:[{userJob: {[Op.eq]: req.body.userJob}}],
            [Op.or]:[{userBusiness: {[Op.eq]: req.body.userBusiness}}/*,{userAge: {[Op.eq]: null}}*/],           
            },           
        include: [
            {
                model: db.attendance,
                //attributes: ['dateAttendance', 'startAttendance', 'endAttendance' ],
                where: {
                    [Op.or]:[{idattendance: {[Op.eq]: req.body.idattendance}}],
                    [Op.or]:[{dateAttendance: {[Op.eq]: req.body.dateAttendance}}],
                    [Op.or]:[{startAttendance: {[Op.eq]: req.body.startAttendance}}],
                    [Op.or]:[{endAttendance: {[Op.eq]: req.body.endAttendance}}/*,{endAttendance: {[Op.eq]: null}}*/]
                }},   
            {
                model: db.partner,
                //attributes: ['idPartner','startPartner', 'endPartner', 'amountPerMonth' ]
                where: {
                    [Op.or]:[{idPartner: {[Op.eq]: req.body.idPartner}}],
                    [Op.or]:[{startPartner: {[Op.eq]: req.body.startPartner}}],
                    [Op.or]:[{endPartner: {[Op.eq]: req.body.endPartner}}],
                    [Op.or]:[{amountPerMonth: {[Op.eq]: req.body.amountPerMonth}}/*,{amountPerMonth: {[Op.eq]: null}}*/]
                }},    
            {
                model: db.payment,
                //attributes: ['paymentType', 'startPayment', 'endPayment', 'userId', 'paymentStatus', 'idProject', 'amountPayment' ],
                where: {
                    [Op.or]:[{idpayment: {[Op.eq]: req.body.idpayment}}],
                    [Op.or]:[{paymentType: {[Op.eq]: req.body.paymentType}}],
                    [Op.or]:[{startPayment: {[Op.eq]: req.body.startPayment}}],
                    [Op.or]:[{endPayment: {[Op.eq]: req.body.endPayment}}],
                    [Op.or]:[{userId: {[Op.eq]: req.body.userId}}],
                    [Op.or]:[{paymentStatus: {[Op.eq]: req.body.paymentStatus}}],
                    [Op.or]:[{idProject: {[Op.eq]: req.body.idProject}}],
                    [Op.or]:[{amountPayment: {[Op.eq]: req.body.amountPayment}}],
                },
                include: [
                    {
                        model:db.project,
                        //attributes:['startProject', 'endProject', 'placeProject', 'descriptionProject', 'startRegister', 'endRegister']
                        where: {
                            [Op.or]:[{idProject: {[Op.eq]: req.body.idProject}}],
                            [Op.or]:[{startProject: {[Op.eq]: req.body.startProject}}],
                            [Op.or]:[{endProject: {[Op.eq]: req.body.endProject}}],
                            [Op.or]:[{placeProject: {[Op.eq]: req.body.placeProject}}],
                            [Op.or]:[{descriptionProject: {[Op.eq]: req.body.descriptionProject}}],
                            [Op.or]:[{startRegister: {[Op.eq]: req.body.startRegister}}],
                            [Op.or]:[{endRegister: {[Op.eq]: req.body.endRegister}}],                
                        }
                    },
                    {
                        model:db.statuspayment,
                        //attributes:['paymentDescription'],
                        where: {
                            [Op.or]:[{idstatusPayment: {[Op.eq]: req.body.idstatusPayment}}],
                            [Op.or]:[{paymentDescription: {[Op.eq]: req.body.paymentDescription}}],                        
                        }
                    },
                    {
                        model:db.paymenttype,
                        //attributes:['descriptionpaymenttype']
                        where: {
                            [Op.or]:[{idpaymenttype: {[Op.eq]: req.body.idpaymenttype}}],
                            [Op.or]:[{descriptionpaymenttype: {[Op.eq]: req.body.descriptionpaymenttype}}],                        
                        }
                    }                                      
                ]},    
            {
                model: db.permission,
                //attributes: ['levelPermission', 'idUser', 'idProcess' ],
                where: {
                    [Op.or]:[{idpermission: {[Op.eq]: req.body.idpermission}}],
                    [Op.or]:[{levelPermission: {[Op.eq]: req.body.levelPermission}}],
                    [Op.or]:[{idUser: {[Op.eq]: req.body.idUser}}],
                    [Op.or]:[{idProcess: {[Op.eq]: req.body.idProcess}}],
                },
                include: [
                    {
                        model:db.process,
                        //attributes:['descriptionProcess']
                        where: {
                            [Op.or]:[{idProcess: {[Op.eq]: req.body.idProcess}}],
                            [Op.or]:[{descriptionProcess: {[Op.eq]: req.body.descriptionProcess}}],            
                        }
                    },
                    {
                        model:db.levelpermission,
                        //attributes:['descriptionlevelpermission'],
                        where: {
                            [Op.or]:[{idlevelpermission: {[Op.eq]: req.body.idlevelpermission}}],
                            [Op.or]:[{descriptionlevelpermission: {[Op.eq]: req.body.descriptionlevelpermission}}],                        
                        }
                    }                                    
                ]},    
            {
                model: db.sendmail,
                //attributes: ['idUser', 'sendDate', 'idPayment' ],
                where: {
                    [Op.or]:[{idSendmail: {[Op.eq]: req.body.idSendmail}}],
                    [Op.or]:[{idUser: {[Op.eq]: req.body.idUser}}],
                    [Op.or]:[{sendDate: {[Op.eq]: req.body.sendDate}}],
                    [Op.or]:[{idPayment: {[Op.eq]: req.body.idPayment}}],
                },
                // include: [
                //     {
                //         model:db.payment,
                //         //attributes:['paymentType', 'startPayment', 'endPayment', 'userId', 'paymentStatus', 'idProject', 'amountPayment']
                //         where: {
                //             [Op.or]:[{idpayment: {[Op.eq]: req.body.idpayment}}],
                //             [Op.or]:[{paymentType: {[Op.eq]: req.body.paymentType}}],
                //             [Op.or]:[{startPayment: {[Op.eq]: req.body.startPayment}}],            
                //             [Op.or]:[{endPayment: {[Op.eq]: req.body.endPayment}}],            
                //             [Op.or]:[{userId: {[Op.eq]: req.body.userId}}],            
                //             [Op.or]:[{paymentStatus: {[Op.eq]: req.body.paymentStatus}}],            
                //             [Op.or]:[{idProject: {[Op.eq]: req.body.idProject}}],
                //             [Op.or]:[{amountPayment: {[Op.eq]: req.body.amountPayment}}],            
                //         }
                //     },                                  
                // ] השאלה אם צריך את זה שוב, יש את זה למעלה בהתייחסות ישירה, את פיימנט
                  },
            {
                model: db.register,
                //attributes: ['idProject', 'idUser', 'statusRegister' ],
                where: {
                    [Op.or]:[{idRegister: {[Op.eq]: req.body.idRegister}}],
                    [Op.or]:[{idProject: {[Op.eq]: req.body.idProject}}],
                    [Op.or]:[{idUser: {[Op.eq]: req.body.idUser}}],
                    [Op.or]:[{statusRegister: {[Op.eq]: req.body.statusRegister}}],
                },
                include: [
                    // {
                    //     model:db.project,
                    //     //attributes:['startProject', 'endProject', 'placeProject', 'descriptionProject', 'startRegister', 'endRegister']
                    //     where: {
                    //         [Op.or]:[{idProject: {[Op.eq]: req.body.idProject}}],
                    //         [Op.or]:[{startProject: {[Op.eq]: req.body.startProject}}],
                    //         [Op.or]:[{endProject: {[Op.eq]: req.body.endProject}}],
                    //         [Op.or]:[{placeProject: {[Op.eq]: req.body.placeProject}}],
                    //         [Op.or]:[{descriptionProject: {[Op.eq]: req.body.descriptionProject}}],
                    //         [Op.or]:[{startRegister: {[Op.eq]: req.body.startRegister}}],
                    //         [Op.or]:[{endRegister: {[Op.eq]: req.body.endRegister}}],                
                    //     }
                    // }, שוב - יש את זה למעלה. צריך שוב? הפעם זה לא ישיר
                    {
                        model:db.statusregister,
                        //attributes:['descriptionStatusRegister'],
                        where: {
                            [Op.or]:[{idStatusRegister: {[Op.eq]: req.body.idStatusRegister}}],
                            [Op.or]:[{descriptionStatusRegister: {[Op.eq]: req.body.descriptionStatusRegister}}],                        
                        }
                    }                                
                ]},                
            {
                model: db.task,
                //attributes: ['idOpenUser', 'idDestinationUser', 'startTask', 'endTask', 'statusTask', 'typeTask', 'content', 'response' ],
                where: {
                    [Op.or]:[{idTask: {[Op.eq]: req.body.idTask}}],
                    [Op.or]:[{idOpenUser: {[Op.eq]: req.body.idOpenUser}}],
                    [Op.or]:[{idDestinationUser: {[Op.eq]: req.body.idDestinationUser}}],
                    [Op.or]:[{startTask: {[Op.eq]: req.body.startTask}}],
                    [Op.or]:[{endTask: {[Op.eq]: req.body.endTask}}],
                    [Op.or]:[{statusTask: {[Op.eq]: req.body.statusTask}}],
                    [Op.or]:[{typeTask: {[Op.eq]: req.body.typeTask}}],
                    [Op.or]:[{content: {[Op.eq]: req.body.content}}],
                    [Op.or]:[{response: {[Op.eq]: req.body.response}}],
                },
                include: [
                    {
                        model:db.typetask,
                        //attributes:['descriptionTypetask']
                        where: {
                            [Op.or]:[{idTypetask: {[Op.eq]: req.body.idTypetask}}],
                            [Op.or]:[{descriptionTypetask: {[Op.eq]: req.body.descriptionTypetask}}],            
                        }
                    },
                    {
                        model:db.statustask,
                        //attributes:['descriptionlevelpermission'],
                        where: {
                            [Op.or]:[{idStatustask: {[Op.eq]: req.body.idStatustask}}],
                            [Op.or]:[{descriptionStatustask: {[Op.eq]: req.body.descriptionStatustask}}],                        
                        }
                    }                                    
                ]}            
        ] 
      });

      
      res.send(result);
    };

    // var data = await User.findAll({
    //     attributes: [ 'userName', 'userAddress', 'userCity', 'userPhone', 'userEmail', 'userRole', 'userPassword', 'userStudyPlace', 'userJoiningDate', 'userJob', 'userAge'],             
    //     include: [
    //         {
    //           model: db.attendance,
    //           required: false,
    //           where: {
    //             dateAttendance: {
    //               [Op.eq]: req.body.dateAttendance || Sequelize.col('db.attendance.dateAttendance')
    //             }
    //           }
    //         },
        // include: [
        // {
        //     model: db.attendance,
        //     attributes: ['dateAttendance', 'startAttendance', 'endAttendance' ],
        //     where: wh                                  
        // },
        // {
        //     model: db.partner,
        //     attributes: ['idPartner','startPartner', 'endPartner', 'amountPerMonth' ]                                 
        // },
        // {
        //     model: db.payment,
        //     attributes: ['paymentType', 'startPayment', 'endPayment', 'userId', 'paymentStatus', 'idProject', 'amountPayment' ],
        //     include: [{model:db.project,attributes:['startProject', 'endProject', 'placeProject', 'descriptionProject', 'startRegister', 'endRegister']},
        //               {model:db.statuspayment,attributes:['paymentDescription']},
        //               {model:db.paymenttype,attributes:['descriptionpaymenttype']}]                                 
        // },
        // {
        //     model: db.permission,
        //     attributes: ['db.permission.levelPermission', 'db.permission.idUser', 'db.permission.idProcess' ],
        //     include: [{model:db.process,attributes:['db.process.descriptionProcess']},
        //               {model:db.levelpermission,attributes:['db.levelpermission.descriptionlevelpermission']}]                               
        // },
        // {
        //     model: db.sendmail,
        //     attributes: ['db.sendmail.idUser', 'db.sendmail.sendDate', 'db.sendmail.idPayment' ],
        //     include: [{model:db.payment,attributes:['db.payment.paymentType', 'db.payment.startPayment', 'db.payment.endPayment', 'db.payment.userId', 'db.payment.paymentStatus', 'db.payment.idProject', 'db.payment.amountPayment']}]                                                    
        // },
        // {
        //     model: db.register,
        //     attributes: ['db.register.idProject', 'db.register.idUser', 'db.register.statusRegister' ],
        //     include: [{model:db.project,attributes:['db.project.startProject', 'db.project.endProject', 'db.project.placeProject', 'db.project.descriptionProject', 'db.project.startRegister', 'db.project.endRegister']},
        //               {model:db.statusregister,attributes:['db.statusregister.descriptionStatusRegister']}]                               
        // },
        // {
        //     model: db.task,
        //     attributes: ['db.task.idOpenUser', 'db.task.idDestinationUser', 'db.task.startTask', 'db.task.endTask', 'db.task.statusTask', 'db.task.typeTask', 'db.task.content', 'db.task.response' ],
        //     include: [{model:db.typetask,attributes:['db.typetask.descriptionTypetask']},
        //               {model:db.statustask,attributes:['db.typetask.descriptionStatustask']}]                               
        // },         
    //],   

    //where: wh
    
    
    //     where: {
    //         //user
    //         // [Op.and]:
    //         // [{userName:null},{[Op.or]:[{userName:User.userName }]}],
    //         // [Op.and]:
    //         // [{userAddress:null},{[Op.or]:[{userAddress:User.userAddress }]}], 
    //         // [Op.and]: 
    //         // [{userPhone:null},{[Op.or]:[{userPhone:User.userPhone }]}],
    //         // [Op.and]: 
    //         // [{userEmail:null},{[Op.or]:[{userEmail:User.userEmail }]}],
    //         // [Op.and]: 
    //         // [{userRole:null},{[Op.or]:[{userRole:User.userRole }]}],
    //         // [Op.and]: 
    //         // [{userPassword:null},{[Op.or]:[{userPassword:User.userPassword }]}], 
    //         // //attendance
    //         // [Op.and]: 
    //         // [{dateAttendance:null},{[Op.or]:[{dateAttendance:db.attendance.dateAttendance }]}], 
    //         // [Op.and]: 
    //         // [{startAttendance:null},{[Op.or]:[{startAttendance:db.attendance.startAttendance }]}],     
    //         // [Op.and]: 
    //         // [{'endAttendance':null},{[Op.or]:[{'endAttendance':db.attendance.endAttendance }]}], 
    //         // [Op.or]:[{x:undefined},{'userName':req.body.userName }],
    //         // [Op.or]:[{'userAddress':undefined},],
    //         [Op.or]:[{x:undefined},{'userAddress':req.body.userAddress }]
           
    //         // //partner
    //         // [Op.and]: 
    //         // [{startPartner:null},{[Op.or]:[{startPartner:db.partner.startPartner }]}],
    //         // [Op.and]: 
    //         // [{endPartner:null},{[Op.or]:[{endPartner:db.partner.endPartner }]}],
    //         // [Op.and]: 
    //         // [{amountPerMonth:null},{[Op.or]:[{amountPerMonth:db.partner.amountPerMonth }]}],                                    
    //         // //payment 
    //         // [Op.and]: 
    //         // [{paymentType:null},{[Op.or]:[{paymentType:db.payment.paymentType }]}], 
    //         // [Op.and]: 
    //         // [{startPayment:null},{[Op.or]:[{startPayment:db.payment.startPayment }]}], 
    //         // [Op.and]: 
    //         // [{endPayment:null},{[Op.or]:[{endPayment:db.payment.endPayment }]}], 
    //         // [Op.and]: 
    //         // [{userId:null},{[Op.or]:[{userId:db.payment.userId }]}], 
    //         // [Op.and]: 
    //         // [{paymentStatus:null},{[Op.or]:[{paymentStatus:db.payment.paymentStatus }]}], 
    //         // [Op.and]: 
    //         // [{idProject:null},{[Op.or]:[{idProject:db.payment.idProject }]}],
    //         // [Op.and]: 
    //         // [{amountPayment:null},{[Op.or]:[{amountPayment:db.payment.amountPayment }]}], 
    //         // //payment - project 
    //         // [Op.and]: 
    //         // [{startProject:null},{[Op.or]:[{startProject:db.project.startProject }]}], 
    //         // [Op.and]: 
    //         // [{endProject:null},{[Op.or]:[{endProject:db.project.endProject }]}],
    //         // [Op.and]: 
    //         // [{placeProject:null},{[Op.or]:[{placeProject:db.project.placeProject }]}],
    //         // [Op.and]: 
    //         // [{descriptionProject:null},{[Op.or]:[{descriptionProject:db.project.descriptionProject }]}],
    //         // [Op.and]: 
    //         // [{startRegister:null},{[Op.or]:[{startRegister:db.project.startRegister }]}],
    //         // [Op.and]: 
    //         // [{endRegister:null},{[Op.or]:[{endRegister:db.project.endRegister }]}],
    //         // //payment - statuspayment
    //         // [Op.and]: 
    //         // [{paymentDescription:null},{[Op.or]:[{paymentDescription:db.statuspayment.paymentDescription }]}],
    //         // //payment - paymenttype
    //         // [Op.and]: 
    //         // [{descriptionpaymenttype:null},{[Op.or]:[{descriptionpaymenttype:db.paymenttype.descriptionpaymenttype }]}],
    //         // //permission
    //         // [Op.and]: 
    //         // [{levelPermission:null},{[Op.or]:[{levelPermission:db.permission.levelPermission }]}],
    //         // [Op.and]: 
    //         // [{idUser:null},{[Op.or]:[{idUser:db.permission.idUser }]}],
    //         // [Op.and]: 
    //         // [{idProcess:null},{[Op.or]:[{idProcess:db.permission.idProcess }]}],
    //         // //permission - process
    //         // [Op.and]: 
    //         // [{descriptionProcess:null},{[Op.or]:[{descriptionProcess:db.permission.descriptionProcess }]}],
    //         // //permission - levelpermission
    //         // [Op.and]: 
    //         // [{descriptionlevelpermission:null},{[Op.or]:[{descriptionlevelpermission:db.permission.descriptionlevelpermission }]}],




    //       }
    //})
    // console.log(req.body.userName);

    //res.send(data) ;
    //להחליף שזה יהיה כמו הפונקציה גטאוליוזרס ביוזר-קונטרולר, מבחינת השגיאות והרז.סנד וכו
//};

//req res  בוור זה לא קשור לגוין זה כל מה שדרשתי מהיוזר להביא צריך לבדוק את ההתאמה בינו לבין מה שיש בטבלה


    // return await User.findAll({
    //     include:[
    //              {model:Role,attributes:['roleDescription']/*, where:{Id:id}*/},
    //              //{model:db.categories,attributes:['Name'],as: "Name"}
    //     ],
    //     raw:true,
    // }
    // ); 
//}




/*idUser, dateAttendance, startAttendance, endAttendance,
        startPartner, endPartner, amountPerMonth,
        paymentType, startPayment, endPayment, userId, paymentStatus, idProject, amountPayment,
        levelPermission, idUser, idProcess,
        startProject, endProject, placeProject, descriptionProject, startRegister, endRegister,
        idProject, idUser, statusRegister,
        idUser, sendDate, idPayment,
        idOpenUser, idDestinationUser, startTask, endTask, statusTask, typeTask, content, response,
        descriptionlevelpermission,
        descriptionProcess,
        descriptionpaymenttype,
        roleDescription,
        paymentDescription,
        descriptionStatusRegister,
        descriptionStatustask,
        descriptionTypetask*/



/*
//partner
[Op.and]: 
[
    { startPartner: null },
    {
        [Op.or]: [
            { startPartner: db.sequelize.col('partner.startPartner') }
        ]
    }
],
[Op.and]: 
[
    { endPartner: null },
    {
        [Op.or]: [
            { endPartner: db.sequelize.col('partner.endPartner') }
        ]
    }
],
[Op.and]: 
[
    { amountPerMonth: null },
    {
        [Op.or]: [
            { amountPerMonth: db.sequelize.col('partner.amountPerMonth') }
        ]
    }
], 
  

*/

