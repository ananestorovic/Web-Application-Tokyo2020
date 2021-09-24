import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Discipline = new Schema(
    {
        sport: {
            type: String
        },
        discipline: {
            type: String
        },
        type:{
            type: String
        },
        minNumPlayers:{
            type: Number
        },
        maxNumPlayers:{
            type: Number
        }
    }
);

export default mongoose.model('Discipline', Discipline, 'disciplines');