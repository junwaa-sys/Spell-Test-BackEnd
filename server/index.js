const express = require('express')
const server = express()
const cors = require('cors')
const wordRoutes = require('./routes/wordRoutes')
const testRoutes = require('./routes/testRoutes')
const testHistoryRoutes = require('./routes/testHistoryRoutes')

const PORT = process.env.PORT || 5000

server.use(cors())
server.use(express.json())
server.use(express.static(__dirname + '/public'))

server.use('/api/words', wordRoutes)
server.use('/api/test', testRoutes)
server.use('/api/test/history', testHistoryRoutes)

server.listen(PORT, () => {
  console.log(`APP listening on port ${PORT}`)
})
