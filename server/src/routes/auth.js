import jwt from 'jsonwebtoken';

const authHandler = (req, res, next) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "");
        const decoded = jwt.verify(token, "secret");
        req.userData = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Authentication Failed"
        });
    }
}

export default authHandler;