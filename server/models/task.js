const statustask = require('./statustask')
const typetask = require('./typetask')


module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('task', {
        idTask: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idOpenUser: DataTypes.INTEGER,
        idDestinationUser: DataTypes.INTEGER,
        startTask: DataTypes.DATE,
        endTask: DataTypes.DATE,
        statusTask: {
            type: DataTypes.INTEGER,
            references: {
                model: statustask,
                key: 'idstatustask',
                //deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        typeTask: {
            type: DataTypes.INTEGER,
            references: {
                model: typetask,
                key: 'idTypetask',
                //deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        content: DataTypes.STRING,
        response: DataTypes.STRING,
    },
        {
            freezeTableName: true,
            timestamps: false
        });
    return Task;
}