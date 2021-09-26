import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Result = new Schema({

    competition:{
        type: String
    },

    participant: {
        type: String
    },

    result: {
        type: String
    },

    numRound: {
        type: Number
    },

    finished:{
        type: String
    }

}
);

export default mongoose.model('Result', Result, 'results');