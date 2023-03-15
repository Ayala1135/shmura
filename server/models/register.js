const project = require("./project")
const user = require("./user")
const statusregister = require('./statusregister')


module.exports = (sequelize, DataTypes) => {
    const Register = sequelize.define('register', {
        idRegister: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idProject: {
            type: DataTypes.INTEGER,
            references: {
                model: project,
                key: 'idProject',
                //deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        idUser: {
            type: DataTypes.INTEGER,
            references: {
                model: user,
                key: 'idUser',
                //deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        statusRegister: {
            type: DataTypes.INTEGER,
            references: {
                model: statusregister,
                key: 'idStatusRegister',
                //deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
    },
        {
            freezeTableName: true,
            timestamps: false
        });
    return Register;
}