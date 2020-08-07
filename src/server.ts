import express from 'express'
import path from 'path'
import nunjucks from 'nunjucks'

import { PORT } from './config'
import routes from './routes'

const app = express()

app.use(express.static(path.resolve(__dirname, '..', 'public')))
app.use(express.urlencoded({ extended: true }))

nunjucks.configure('src/views', {
  express: app,
  noCache: true
})

app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
