const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, maxLength: 50 },
    imageUrl: { type: String, required: true },
    public: { type: Boolean, required: true, default: false },
    createAt: { type: Data, required: true },
    usersLiked: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    author: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = model('Play', schema);