import express from 'express'
import { DeleteData, HostCheck, ErrMsg } from '../../../db/connect'

async function deleteSchedule(req:express.Request, res:express.Response) {
    const auth = await HostCheck("todo", req, res)
    if(!auth) return res.status(403).end()
    try{
        const key = {
            "USERID" : req.body.USERID,
            "TODOKEY" : req.body.TODOKEY
        }
        const asb = DeleteData("todo", "TODOLIST", key)
        return res.status(200).json(asb)
    } catch (err) {
        return res.status(400).send(ErrMsg)
        // return res.status(400).send("{\"errMsg\":\"" + err.message + "\"}")
    }
}

export default deleteSchedule