import 'dotenv/config.js';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js';
import models, { connectDb } from './models/index.js';
import seedData from './seed-data.js';

const app = express();
const { json, urlencoded } = bodyParser;

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use('/api', router);

connectDb().then(async() => {
    await seedData();
    app.listen(process.env.PORT, () => {
    });
});

