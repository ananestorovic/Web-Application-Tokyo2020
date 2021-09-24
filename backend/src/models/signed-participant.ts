import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let SignedParticipant = new Schema(
    {
        name: {
            type: String
        },
        sex: {
            type: String
        },
        discipline: {
            type: String
        },
        sport: {
            type: String
        },
        competitionName: {
            type: String
        }
    }
);

export default mongoose.model('SignedParticipant', SignedParticipant, 'signedParticipants');