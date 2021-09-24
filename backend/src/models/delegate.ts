import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Delegate = new Schema ({

    username: {
        type: String
    },

    name:{
        type: String
    },

    surname:{
        type: String
    },

    number:{
        type: Number
    },

    disciplines:{
        type: Array
    }

}
);

export default mongoose.model('Delegate', Delegate, 'delegates');