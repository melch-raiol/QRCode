const knex = require('../connections');

const registerUsers = async (req, res) => {
    const { name, linkedin, gitHub } = req.body;
    console.log(name);
    try {
        const newUser = await knex('users')
            .insert({
                name,
                linkedin,
                gitHub
            })
            .returning('*');

        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno do servidor' })
    }
};

const getDate = async (req, res) => {
    const { name } = req.parms;
    try {
        const { rows, rowCount } = await knes('users').whare({ name }).first();

        return res.json(rows);
    } catch (error) {
        return res.status(500).json('Erro interno do servidor');
    }
};

module.exports = {
    registerUsers,
    getDate
};