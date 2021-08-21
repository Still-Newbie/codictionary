import express from 'express'
import { SelectData, HostCheck } from '../../../db/connect'
// import info from './info'

const pf = express.Router()

// pf.get('/info', info)

// pf.get('/', (req, res) => {
//     return res.status(200).send("pf")
// })

pf.get('/:table', async (req, res) => {
    const auth = await HostCheck("pf", req, res)
    if(!auth) return res.status(403).end()
    const { table } = req.params
    const result = await SelectData("pf", "SELECT * FROM " + table.toUpperCase())
    return res.status(200).json(result)
})

export default pf