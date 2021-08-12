import express from 'express'
import mysql from 'mysql'
import api from './api'
import dbconfig from '../config/dbconfig'
import GetData from '../db/connect'
// import { Connect, Query } from '../db/connect'

const app = express()
const port = 3003

app.use(express.json())
app.use('/api', api)

// app.get('/', async (req: express.Request, res: express.Response, next:express.NextFunction) => {
//     res.status(200).send('')
// })

app.get('*', (req, res) => {
    res.status(403).end()
})

app.listen(port, () => {
    console.log('서버 돌아간다~!')
})