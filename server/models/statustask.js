module.exports = (sequelize,DataTypes)=>{
    const StatusTask = sequelize.define('statustask',{
        idStatustask: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descriptionStatustask: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return StatusTask;
}