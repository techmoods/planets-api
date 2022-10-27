import mongoose from 'mongoose'

const URI = 'mongodb+srv://webapp:6S9YkzjLGpNjA68@sapicluster.nun1qcl.mongodb.net/?retryWrites=true&w=majority'
const events = ['all', 'close', 'connected', 'connecting', 'disconnecting', 'error', 'open', 'reconnectFailed', 'reconnected']

for (const event of events) {
    mongoose.connection.on(event, (err = '') => {
        console.log(`Mongoose: ${event}`)
        if (err instanceof Error) console.error(err)
    })
}

await mongoose.connect(URI).catch(err => {
    console.error(err)
    process.exit(1)
})

