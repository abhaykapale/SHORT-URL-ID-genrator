const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema(
    {
        URL: {
            type: String,
            required: true
        },

        ShortID: {
            type: String,
        },

        clicks: {
            type: Number,
            default: 0
        },

        RedirectID: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("URL", UrlSchema);
