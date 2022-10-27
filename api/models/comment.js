import { Schema, model } from 'mongoose'

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    
}, { timestamps: true })

const Comment = model('Comment', commentSchema, 'comments')

export default Comment