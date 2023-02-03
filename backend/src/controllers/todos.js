import { ToDo } from '../models/index';

const index = async (req, res) => {
    try {
        const todos = await ToDo.findAll();
        return res.status(200).send(todos);   
    } catch (error) {
        return res.status(500).send(error);
    }
}

const create = async (req, res) => {
    try {
        const todo = await ToDo.create(req.body);
        return res.status(201).send(todo);
    } catch (error) {
        return res.status(500).send(error);
    }
}

const read = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await ToDo.findOne({ where: { id } });
        if (!todo)
            return res.sendStatus(404);
        return res.status(200).send(todo);   
    } catch (error) {
        return res.status(500).send(error);
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const found = await ToDo.findByPk(id);
        if (!found)
            return res.sendStatus(404);
        await ToDo.update(req.body, { where: { id } });
        const todo = await ToDo.findByPk(id);
        return res.status(201).send(todo); 
    } catch (error) {
        console.log(error)
        return res.status(500).send(error);
    }
}

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const found = await ToDo.findByPk(id);
        if (!found)
            return res.sendStatus(404);
        const todo = await ToDo.destroy({ where: { id } });
        return res.sendStatus(204); 
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}

export default { index, create, read, update, remove }