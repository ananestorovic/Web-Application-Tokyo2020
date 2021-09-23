import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRouter from './routes/user.routes';
import countryRouter from './routes/country.routes';
import sportistRouter from './routes/sportist.routes';
import medalRouter from './routes/medal.routes';
import sportRouter from './routes/medal.routes copy';
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tokyo2020');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('mongo ok')
});

const router = express.Router();
router.use('/users', userRouter)
router.use('/countries', countryRouter)
router.use('/sportists', sportistRouter)
router.use('/medals', medalRouter)
router.use('/sports', sportRouter)

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));