const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('project_one', 'root', 'Anhthanh1102@', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3307',
    logging: false,
});

const connectToDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    connectToDB
}