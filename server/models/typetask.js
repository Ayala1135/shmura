module.exports = (sequelize,DataTypes)=>{
    const TypeTask = sequelize.define('typetask',{
        idTypetask: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descriptionTypetask: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return TypeTask;
}