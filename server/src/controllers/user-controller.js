import models from '../models/index.js';
const { User } = models;

const userController = {
    async registerNewUser (req, res) {
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(409).json({
                    message: "email already in use"
                });
            }
            user = new User(req.body);
            let data = await user.save();
            const token = await user.generateAuthToken();
            res.status(201).json({ data, token });
        } catch (err) {
            res.status(400).json({ err: err });
        }
    },
    async loginUser (req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findByCredentials(email, password);
            if (!user) {
                return res.status(401).json({ error: "Incorrect email or password"});
            }
            const token = await user.generateAuthToken();
            res.status(201).json({ user, token });
        } catch (err) {
            res.status(400).json({ err: err });
        }
    },
    async getUserDetails (req, res) {
        await res.json(req.userData);
    },
};

export default userController;