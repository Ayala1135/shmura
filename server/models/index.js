const dbConfig = require('../dbConfig/dbConfig.js');
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
}, { freezeTableName: false });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.js')(sequelize, Sequelize)
db.partner = require('./partner.js')(sequelize, Sequelize)
db.permission = require('./permission.js')(sequelize, Sequelize)
db.payment = require('./payment.js')(sequelize, Sequelize)
db.register = require('./register.js')(sequelize, Sequelize)
db.attendance = require('./attendance.js')(sequelize, Sequelize)
db.task = require('./task.js')(sequelize, Sequelize)
db.project = require('./project.js')(sequelize, Sequelize)
db.sendmail = require('./sendmail.js')(sequelize, Sequelize)

db.role = require('./role.js')(sequelize, Sequelize)
db.process = require('./process.js')(sequelize, Sequelize)
db.levelpermission = require('./levelpermission.js')(sequelize, Sequelize)
db.levelpermission = require('./levelpermission.js')(sequelize, Sequelize)
db.paymenttype = require('./paymenttype.js')(sequelize, Sequelize)
db.statuspayment = require('./statuspayment.js')(sequelize, Sequelize)
db.statusregister = require('./statusregister.js')(sequelize, Sequelize)
db.statustask = require('./statustask.js')(sequelize, Sequelize)
db.typetask = require('./typetask.js')(sequelize, Sequelize)

// db.sequelize.sync({ force: false })
//     .then(() => {
//         console.log('yes re-sync done!')
//     })

//join
db.role.hasMany(db.user, {foreignKey:'userRole'})
db.user.belongsTo(db.role, {foreignKey:'userRole'})
db.user.hasMany(db.partner, {foreignKey:'idPartner'});
db.partner.belongsTo(db.user, {foreignKey:'idPartner'});
db.user.hasMany(db.attendance, {foreignKey:'idUser'});
db.attendance.belongsTo(db.user, {foreignKey:'idUser'});
db.user.hasMany(db.task, {foreignKey:'idOpenUser'});
db.task.belongsTo(db.user, {foreignKey:'idOpenUser'});
db.user.hasMany(db.task, {foreignKey:'idDestinationUser'});
db.task.belongsTo(db.user, {foreignKey:'idDestinationUser'});
db.statustask.hasMany(db.task, {foreignKey:'statusTask'});
db.task.belongsTo(db.statustask, {foreignKey:'statusTask'});
db.typetask.hasMany(db.task, {foreignKey:'typeTask'})
db.task.belongsTo(db.typetask, {foreignKey:'typeTask'})
db.project.hasMany(db.register, {foreignKey:'idProject'})
db.register.belongsTo(db.project, {foreignKey:'idProject'})
db.user.hasMany(db.register, {foreignKey:'idUser'})
db.register.belongsTo(db.user, {foreignKey:'idUser'})
db.statusregister.hasMany(db.register, {foreignKey:'statusRegister'})
db.register.belongsTo(db.statusregister, {foreignKey:'statusRegister'})
db.paymenttype.hasMany(db.payment, {foreignKey:'paymentType'})
db.payment.belongsTo(db.paymenttype, {foreignKey:'paymentType'})
db.user.hasMany(db.payment, {foreignKey:'userId'})
db.payment.belongsTo(db.user, {foreignKey:'userId'})
db.statuspayment.hasMany(db.payment, {foreignKey:'paymentStatus'})
db.payment.belongsTo(db.statuspayment, {foreignKey:'paymentStatus'})
db.project.hasMany(db.payment, {foreignKey:'idProject'})
db.payment.belongsTo(db.project, {foreignKey:'idProject'})
db.user.hasMany(db.sendmail, {foreignKey:'idUser'})
db.sendmail.belongsTo(db.user, {foreignKey:'idUser'})
db.payment.hasMany(db.sendmail, {foreignKey:'idPayment'})
db.sendmail.belongsTo(db.payment, {foreignKey:'idPayment'})
db.levelpermission.hasMany(db.permission, {foreignKey:'levelPermission'})
db.permission.belongsTo(db.levelpermission, {foreignKey:'levelPermission'})
db.user.hasMany(db.permission, {foreignKey:'idUser'})
db.permission.belongsTo(db.user, {foreignKey:'idUser'})
db.process.hasMany(db.permission, {foreignKey:'idProcess'})
db.permission.belongsTo(db.process, {foreignKey:'idProcess'})

module.exports = db;