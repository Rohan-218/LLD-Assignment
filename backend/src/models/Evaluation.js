import mongoose from "mongoose";


const evaluationSchema = new mongoose.Schema({
    attempt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Attempt",
        required: true
    },
    strengths: {
        type: [String],
        default: []
    },
    issues: {
        type: [String],
        default: []
    },
    suggestions: {
        type: [String],
        default: []
    },
    tradeoffs: {
        type: [String],
        default: []
    },
    evaluatorType: {
        type: String,
        enum: ["rule_based", "ai"],
        required: true
    }
},{
    timestamps: true
});


const Evaluation = mongoose.model("Evaluation", evaluationSchema);

export default Evaluation;