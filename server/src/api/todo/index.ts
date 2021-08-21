import express from 'express'
import { SelectData, HostCheck } from '../../../db/connect'
import addSchedule from './addSchedule'

const todo = express.Router()

todo.post("/addSchedule", addSchedule)

// todo.get('/:table', async (req, res) => {
//     HostCheck("todo", req, res)
//     const { table } = req.params
//     const result = await SelectData("todo", "SELECT * FROM " + table.toUpperCase())
//     return res.status(200).json(result)
// })

export default todo