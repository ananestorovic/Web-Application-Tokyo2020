import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sport = new Schema(
    {
        sport: {
            type: String
        },
        discipline: {
            type: Array
        }
        
    }
);

export default mongoose.model('Sport', Sport, 'sports');