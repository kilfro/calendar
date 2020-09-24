const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const port = 4500
const app = express()

routes(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cors({
    origin: true,
  })
)

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  }
  console.log(`Server is ready on port ${port}`)
})
