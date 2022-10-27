// enforce a standard timezone
process.env.TZ = 'UTC'

// bring in express, routes, and services
import express from 'express'
import commentRouter from './routes/router.js'
import './services/mongoose.js'

// start express on port 5000
const PORT = 5000
const app = express()

// serve static files, call middlewares
app.use(express.static('./client'))
app.use(express.json())
app.use('/comment', commentRouter)

// run server and listen on specified port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}..`)
})

