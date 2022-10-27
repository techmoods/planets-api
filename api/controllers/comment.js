import Comment from '../models/comment.js'

class commentController {

    async create(content) {
        return Comment.create({ content })
    }

    async list() {
        return Comment.find()
    }

    async get(_id) {
        return Comment.findById(_id)
    }

    async update(_id, content) {
        return Comment.findByIdAndUpdate(_id, { content }, { new: true } )
    }

    async delete(_id) {
        return Comment.findByIdAndDelete(_id)
    }
}

export default new commentController()