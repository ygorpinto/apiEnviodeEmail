import express from 'express'
import router from './controllers/controllers.js';
import connectDB from './database/db.js'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json({ extended : false }));
app.use("/",router);

connectDB();

app.listen(3000);