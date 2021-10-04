import express from 'express'
import { SelectData, HostCheck } from '../../../db/connect'
import getSchedule from './getSchedule'
import addSchedule from './addSchedule'
import deleteSchedule from './deleteSchedule'

const todo = express.Router()

todo.post("/getSchedule", getSchedule)
todo.post("/addSchedule", addSchedule)
todo.post("/deleteSchedule", deleteSchedule)

// todo.get('/:table', async (req, res) => {
//     HostCheck("todo", req, res)
//     const { table } = req.params
//     const result = await SelectData("todo", "SELECT * FROM " + table.toUpperCase())
//     return res.status(200).json(result)
// })

export default todo