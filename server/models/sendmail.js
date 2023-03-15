const user = require("./user");
const payment = require("./payment");


module.exports = (sequelize, DataTypes) => {
    const Sendmail = sequelize.define('sendmail', {
        idSendmail: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idUser: {
            type: DataTypes.INTEGER,
            references: {
                model: user,
                key: 'idUser',
                //deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        sendDate: DataTypes.DATE,
        idPayment: {
            type: DataTypes.INTEGER,
            references: {
                model: payment,
                key: 'idPayment',
                //deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
    },
        {
            freezeTableName: true,
            timestamps: false
        });
    return Sendmail;
}