const role = require("./role.js")

module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('user',{
        idUser: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userName: DataTypes.STRING,
        userAddress: DataTypes.STRING,
        userCity: DataTypes.STRING,
        userPhone: DataTypes.INTEGER,
        userEmail: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            }
        },
        userRole: {
        type: DataTypes.INTEGER,
        references: {
            model: role,
            key: 'idRole',
        }
        },
        userPassword: DataTypes.STRING,
        userStudyPlace: DataTypes.STRING,
        userJoiningDate: DataTypes.DATE,
        userJob: DataTypes.STRING,
        userAge: DataTypes.INTEGER
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return User;
}