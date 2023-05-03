module.exports = (sequelize,DataTypes)=>{
    const Paymenttype = sequelize.define('paymenttype',{
        idpaymenttype: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descriptionpaymenttype: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return Paymenttype;
}