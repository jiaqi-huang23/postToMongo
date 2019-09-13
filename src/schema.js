import { Schema } from 'mongoose'

const postSchema = new Schema({
    _id: String,
    title: String,
    content: String,
    createdDate: Date,
});

export default postSchema;