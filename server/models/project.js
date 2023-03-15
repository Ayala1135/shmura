module.exports = (sequelize,DataTypes)=>{
    const Project = sequelize.define('project',{
        idProject: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        startProject: DataTypes.DATE,
        endProject: DataTypes.DATE,
        placeProject: DataTypes.STRING,
        descriptionProject: DataTypes.STRING,
        startRegister: DataTypes.DATE,
        endRegister: DataTypes.DATE
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return Project;
}