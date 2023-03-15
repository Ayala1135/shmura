module.exports = (sequelize,DataTypes)=>{
    const LevelPermission = sequelize.define('levelpermission',{
        idlevelpermission: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descriptionlevelpermission: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return LevelPermission;
}