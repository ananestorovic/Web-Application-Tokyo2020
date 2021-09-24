import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Venue = new Schema ({

 

    name:{
        type: String
    },

    sports:{
        type: Array
    }

}
);

export default mongoose.model('Venue', Venue, 'venues');