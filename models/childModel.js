import mongoose from 'mongoose';

const guideSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const childSchema = new mongoose.Schema({
    age: {
        type: Number,
        required: true
    },
    guides: [guideSchema],
});


export default mongoose.model('ChildModel', childSchema)
