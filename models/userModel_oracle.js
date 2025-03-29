const { getConnection } = require('../config/db_oracle');

class UserModel {
    static async createUser(user) {
        const conn = await getConnection();
        const result = await conn.execute(
            `INSERT INTO users (id, name, email) 
            VALUES (user_seq.NEXTVAL, :name, :email)`,
            [user.name, user.email],
            { autoCommit: true }
        );
        await conn.close();
        return result;
    }

    static async getUsers() {
        const conn = await getConnection();
        const result = await conn.execute(
            `SELECT * FROM users`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        await conn.close();
        return result.rows;
    }
}

module.exports = UserModel;