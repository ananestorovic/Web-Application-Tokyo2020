import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Country = new Schema ({

    countryID:{
        type: Number
    },

   country: {
        type: String
    },

    countryCode:{
        type: Number
    },

    numberOfParticipants:{
        type: Number
    }

}
);

export default mongoose.model('Country', Country, 'countries');