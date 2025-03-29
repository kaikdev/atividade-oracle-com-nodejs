const UserModel = require('../models/userModel_oracle');

const UserController = {
    async create(req, res) {
        try {
            await UserModel.createUser(req.body);
            res.status(201).json({ message: 'Usuário criado!' });
        } 
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async list(req, res) {
        try {
            const users = await UserModel.getUsers();
            res.status(200).json(users);
        } 
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = UserController;