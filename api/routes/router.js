import { Router } from 'express'
import commentController from '../controllers/comment.js'

const router = Router()

// Implement error handling

// Create
router.post('/', async (req, res) => {
    try {
        const comment = await commentController.create(req.body.content)
        res.send(comment)
    } catch (error) {
        const message = `Failed to create comment. [${error}]`
        console.log(message)
        res.status(500).send(message)
    }
})

// Read
router.get('/list', async (req, res) => {
    try {
        const comments = await commentController.list()
        res.send(comments)
    } catch (error) {
        const message = `Failed to get comment list. [${error}]`
        console.log(message)
        res.status(500).send(message)
    }
})

router.get('/:_id', async (req, res) => {
    try {
        const comment = await commentController.get(req.params._id)
        res.send(comment)
    } catch (error) {
        const message = `Failed to get comment wtih id '${req.params._id}'`
        console.log(message)
        res.status(500).send(message)
    }
})

router.get('/test', async (req, res) => {
    res.send('test works!')
})

// Update
router.patch('/', async (req, res) => {
    const { _id, content } = req.body
    try {
        const comment = await commentController.update(_id, content)
        res.send(comment)
    } catch (error) {
        const message = `Failed to update comment with id '${req.params._id}'`
        console.log(message)
        res.status(500).send(message)
    }
})

// Delete
router.delete('/:_id', async (req, res) => {
    try {
        const comment = await commentController.delete(req.params._id)
        res.send(comment)
    } catch (error) {
        const message = `Failed to delete comment with id '${req.params._id}'`
        console.log(message)
        res.status(500).send(message)
    }
})

export default router