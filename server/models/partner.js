const partner = require("./partner");
const user = require("./user");

module.exports = (sequelize,DataTypes)=>{
    const Partner = sequelize.define('partner',{
        idPartner: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: user,
                key: 'idUser',
            }
        },
        startPartner: DataTypes.DATE,
        endPartner: DataTypes.DATE,
        amountPerMonth: DataTypes.INTEGER,
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return Partner;
}