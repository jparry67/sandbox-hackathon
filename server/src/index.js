import 'dotenv/config.js';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js';
import models, { connectDb } from './models/index.js';

const app = express();
const { json } = bodyParser;

app.use(cors());
app.use(json())
app.use('/api', router);

connectDb().then(async() => {
    // seed or erase data here if we need to

    app.listen(process.env.PORT, () => {
        console.log(`listening on ${process.env.PORT}`);
    });
});
