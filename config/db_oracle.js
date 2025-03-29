const oracledb = require('oracledb');
require('dotenv').config();

async function getConnection() {
    try {
        const connection = await oracledb.getConnection({
            user: process.env.ORACLE_USER,
            password: process.env.ORACLE_PASSWORD,
            connectString: process.env.ORACLE_CONNECTION_STRING
        });
        console.log('Conectado ao Oracle!');
        return connection;
    } 
    catch (err) {
        console.error('Erro na conexão:', err);
    }
}

module.exports = { getConnection };