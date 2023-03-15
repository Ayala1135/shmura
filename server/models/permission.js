const levelpermission = require("./levelpermission")
const user = require("./user");
const process = require("./process");

module.exports = (sequelize,DataTypes)=>{
    const Permission = sequelize.define('permission',{
        idpermission: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        levelPermission: {
        type: DataTypes.INTEGER,
        references: {
            model: levelpermission,
            key: 'idlevelpermission',
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
        idProcess: {
        type: DataTypes.INTEGER,
        references: {
            model: process,
            key: 'idProcess',
            //deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return Permission;
}