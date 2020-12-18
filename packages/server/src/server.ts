import cors from "cors"
import express from "express"
import http from "http"

import app from "./app"
import { setupIO } from "./io"

const port = process.env.PORT ? parseInt(process.env.PORT) : 3333

const server = new http.Server(app)
setupIO(server)

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server On')
})

server.listen(3333, () => {
  console.log(`listening on *:${port}`)
});
