module.exports = (sequelize,DataTypes)=>{
    const Process = sequelize.define('process',{
        idProcess: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descriptionProcess: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return Process;
}