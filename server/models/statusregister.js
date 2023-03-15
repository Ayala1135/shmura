module.exports = (sequelize,DataTypes)=>{
    const StatusRegister = sequelize.define('statusregister',{
        idStatusRegister: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descriptionStatusRegister: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return StatusRegister;
}