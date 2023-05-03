const paymenttypes = require('./paymenttypes')
const user = require('./user')
const statuspayment = require('./statuspayment')
const project = require('./project')


module.exports = (sequelize,DataTypes)=>{
    const Payment = sequelize.define('payment',{
        idpayment: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        paymentType: {
        type: DataTypes.INTEGER,
        references: {
            model: paymenttypes,
            key: 'idpaymenttype',
            //deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
        },
        startPayment: DataTypes.DATE,
        endPayment: DataTypes.DATE,
        userId: {
        type: DataTypes.INTEGER,
        references: {
            model: user,
            key: 'idUser',
            //deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
        },
        paymentStatus: {
        type: DataTypes.INTEGER,
        references: {
            model: statuspayment,
            key: 'idstatusPayment',
            //deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
        },
        idProject: {
        type: DataTypes.INTEGER,
        references: {
            model: project,
            key: 'idProject',
            //deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
        },
        amountPayment: DataTypes.INTEGER,
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return Payment;
}