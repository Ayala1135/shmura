const role = require("./role.js")

module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('user',{
        idUser: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userFirstName: DataTypes.STRING,
        userLastName: DataTypes.STRING,
        userStreet: DataTypes.STRING,
        userStreetNumber: DataTypes.INTEGER,
        userCity: DataTypes.STRING,
        userBirthday: DataTypes.DATE,
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
        userGraduationYear: DataTypes.INTEGER,
        userJoiningDate: DataTypes.DATE,
        userJob: DataTypes.STRING,
        userBusiness: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return User;
}