import express from 'express'
import { DeleteData, HostCheck, data, ErrMsg } from '../../../db/connect'

async function deleteSchedule(req:express.Request, res:express.Response) {
    const auth = await HostCheck("todo", req, res)
    const userid = ""
    if(!auth) return res.status(403).end()
    try{
        const seq = req.body.key
        const key:data = {
            "USERID" : userid,
            "TODOKEY" : seq
        }
        const asb = DeleteData("todo", "TODOLIST", key)
        return res.status(200).json(asb)
    } catch (err) {
        return res.status(400).send(ErrMsg)
        // return res.status(400).send("{\"errMsg\":\"" + err.message + "\"}")
    }
}

export default deleteSchedule