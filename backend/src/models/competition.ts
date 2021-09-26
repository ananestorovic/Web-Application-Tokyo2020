import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Competition = new Schema({

    name:{
        type: String
    },

    sport: {
        type: String
    },

    discipline: {
        type: String
    },

    sex: {
        type: String
    },

    startDate: {
        type: String
    },

    endDate: {
        type: String
    },

    venue: {
        type: [String]
    },

    format: {
        type: String
    },

    delegate: {
        type: String
    },

    signedParticipants: {
        type: Array
    },

    formed: {
        type: String
    },
    
    dateFinalRound: {
        type: String
    },

    timeFinalRound: {
        type: String
    }

}
);

export default mongoose.model('Competition', Competition, 'competitions');