const user = require("./user");

module.exports = (sequelize,DataTypes)=>{
    const Attendance = sequelize.define('attendance',{
        idattendance: {
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
        dateAttendance: DataTypes.DATE,
        startAttendance: DataTypes.TIME,
        endAttendance: DataTypes.TIME
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return Attendance;
}