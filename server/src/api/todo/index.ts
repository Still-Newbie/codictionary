import express from 'express'
import GetData from '../../../db/connect'

const todo = express.Router()

todo.get('/:table', async (req, res) => {
    const { table } = req.params
    const result = await GetData("todo", "SELECT * FROM " + table.toUpperCase())
    return res.status(200).json(result)
})

export default todo