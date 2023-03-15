module.exports = (sequelize,DataTypes)=>{
    const Role = sequelize.define('role',{
        idRole: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        roleDescription: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps:false
    });
    return Role;
}