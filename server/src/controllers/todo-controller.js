import models from '../models/index.js';
const { Todo } = models;

const todoController = {
    byUser (req, res) {
        // TODO implement this after todos belong to users
        // .find() or .where()
    },
    byId (req, res) {
        // TODO maybe implement this
        // .findOne() or .findById()
    },
    all (req, res) {
        Todo.find((err, todos) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(todos);
        });
    },
    create (req, res) {
        new Todo(req.body).save((err, todo) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(todo);
        });
    },
    update (req, res) {
        Todo.findByIdAndUpdate(
            req.params.todoId,
            req.body,
            {new: true},
            (err, todo) => {
                if (err) return res.status(500).send(err);
                return res.send(todo);
            }
        );
    },
    delete (req, res) {
        Todo.findByIdAndRemove(
            req.params.todoId,
            (err, todo) => {
                if (err) return res.status(500).send(err);
                const response = {
                    message: "Todo successfully deleted",
                    id: todo._id,
                };
                return res.status(200).send(response);
            }
        )
    },
    deleteAll (req, res) {
        Todo.deleteMany((err) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send({message: "All todos successfully deleted"});
        })
    }
};

export default todoController;