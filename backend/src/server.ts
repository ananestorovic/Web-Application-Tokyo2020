import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRouter from './routes/user.routes';
import countryRouter from './routes/country.routes';
import sportistRouter from './routes/sportist.routes';
import medalRouter from './routes/medal.routes';
import sportRouter from './routes/sport.routes';
import disciplineRouter from './routes/discipline.routes';
import venueRouter from './routes/venue.routes';
import competitionRouter from './routes/competition.routes';
import signedParticipantRouter from './routes/signed-participant.routes';
import delegateRouter from './routes/delegate.routes';
import resultRouter from './routes/result.routes';
import roundRouter from './routes/round.routes';
import { dropDataBase, seedDataBase } from './seed/seed';
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tokyo2020');
const connection = mongoose.connection;
connection.once('open', async () => {
    console.log('mongo ok');
    await dropDataBase(connection);
    await seedDataBase(connection);
});

const router = express.Router();
router.use('/users', userRouter)
router.use('/countries', countryRouter)
router.use('/sportists', sportistRouter)
router.use('/medals', medalRouter)
router.use('/sports', sportRouter)
router.use('/disciplines', disciplineRouter)
router.use('/venues', venueRouter)
router.use('/competitions', competitionRouter)
router.use('/signedParticipants', signedParticipantRouter)
router.use('/delegates', delegateRouter)
router.use('/results', resultRouter)
router.use('/rounds', roundRouter)






app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));