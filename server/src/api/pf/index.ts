import express from 'express'
import GetData from '../../../db/connect'
// import info from './info'

const pf = express.Router()

// pf.get('/info', info)

// pf.get('/', (req, res) => {
//     return res.status(200).send("pf")
// })

pf.get('/:table', async (req, res) => {
    const { table } = req.params
    const result = await GetData("pf", "SELECT * FROM " + table.toUpperCase())
    return res.status(200).json(result)
})

export default pf