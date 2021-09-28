import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Medal = new Schema(
    {
        country: {
            type: String
        },
        numGold: {
            type: Number
        },
        numSilver: {
            type: Number
        },
        numBronze: {
            type: Number
        },
        sum: {
            type: Number
        }
    }
);

export default mongoose.model('Medal', Medal, 'medals');