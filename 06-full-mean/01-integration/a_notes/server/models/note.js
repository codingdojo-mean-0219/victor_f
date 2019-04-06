const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "text required"],
        minlength: [3, "Must be at least 3 characters"]
    },
}, {timestamps: true})

mongoose.model("Note", NoteSchema);
