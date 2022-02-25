import express from 'express'
import { InsertData, HostCheck, schedule, ErrMsg} from '../../../db/connect'

async function addSchedule(req:express.Request, res:express.Response) {
    const auth = await HostCheck("todo", req, res)
    if(!auth) return res.status(403).end()
    try{
        const schd:Required<schedule> = req.body
        InsertData("todo", "TEMP_TODO", schd)
        return res.status(200).json(schd)
    } catch (err) {
        console.log(err)
        return res.status(400).send(ErrMsg)
    }
}

export default addSchedule