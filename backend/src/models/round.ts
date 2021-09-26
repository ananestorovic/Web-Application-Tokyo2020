import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Round = new Schema({

    competition:{
        type: String
    },

    results: {
        type: Array
    },
    
    participants:{
        type: Array
    },

    numRound: {
        type: Number
    },

    isFinal:{
        type: String
    }

}
);

export default mongoose.model('Round', Round, 'rounds');