import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true,
        enum: ["Easy", "Medium", "Hard"]
    },
    requirements: {
        type: [String],
        required: true
    }
},{
        timestamps: true
});

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;