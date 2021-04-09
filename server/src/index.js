import 'dotenv/config.js';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.js';
import models, { connectDb } from './models/index.js';

const app = express();
const { json } = bodyParser;
const eraseDatabaseOnSync = true;

app.use(cors());
app.use(json())
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use('/todo', routes.todo);

connectDb().then(async() => {
    if (eraseDatabaseOnSync) {
        await Promise.all([
            models.User.deleteMany({}),
            models.Message.deleteMany({}),
        ]);
    }
   
    app.listen(process.env.PORT, () => {
        console.log(`listening on ${process.env.PORT}`);
    });
});
