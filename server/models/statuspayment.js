module.exports = (sequelize,DataTypes)=>{
    const Statuspayment = sequelize.define('statuspayment',{
        idstatusPayment: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        paymentDescription: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return Statuspayment;
}