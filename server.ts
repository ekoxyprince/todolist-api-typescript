import * as  http from 'http'
import app from './app'
const server = http.createServer(app)
const port = 3000

server.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})


