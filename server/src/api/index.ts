import express from 'express'
import pf from './pf'
import todo from './todo'

const api = express.Router()

api.use('/pf', pf)
api.use('/todo', todo)

// api.get('/', (req, res) => {
//     return res.status(200).send("api")
// })

export default api