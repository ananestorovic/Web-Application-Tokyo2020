import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sportist = new Schema ({

    participantID:{
        type: Number
    },

    name: {
        type: String
    },

    sex: {
        type: String
    },

    nationality:{
        type: String
    },

    sport:{
        type: String
    },

    disciplines:{
        type: Array
    },

    medalCount:{
        type: Number
    }
    

}
);

export default mongoose.model('Sportist', Sportist, 'sportists');