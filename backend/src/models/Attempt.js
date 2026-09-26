import mongoose from "mongoose";


const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    responsibilities: {
        type: [String],
        default: []
    }
},{
    _id: false
});


const relationshipSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
},{
    _id: false
});


const decisionSchema = new mongoose.Schema({
    decision: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        default: ""
    }
},{
    _id: false
});


const designSchema = new mongoose.Schema({
    classes: {
        type: [classSchema],
        default: []
    },
    relationships: {
        type: [relationshipSchema],
        default: []
    },
    decisions: {
        type: [decisionSchema],
        default: []
    }
},{
    _id: false
});


const attemptSchema = new mongoose.Schema({
    problem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Problem",
        required: true
    },
    design: {
        type: designSchema,
        required: true
    },
    status: {
        type: String,
        enum: ["submitted", "evaluating", "evaluated", "evaluation_failed"],
        default: "submitted"
    }
},{
    timestamps: true
});


const Attempt = mongoose.model("Attempt", attemptSchema);

export default Attempt;