const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('ChatRoom', 'root', 'suraj8700', {
    host: 'localhost',
    dialect: "mysql",
    port: 3306
})

module.exports = {sequelize, DataTypes}
