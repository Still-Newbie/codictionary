import express from 'express'
import { DeleteData, HostCheck } from '../../../db/connect'

async function deleteSchedule(req:express.Request, res:express.Response) {
    const auth = await HostCheck("todo", req, res)
    if(!auth) return res.status(403).end()
    try{
        const seq = req.body.key
        DeleteData("todo", "TEMP_TODO", seq)
        return res.status(200).json(seq)
    } catch (err) {
        console.log(err)
        return res.status(400).send("{\"errMsg\":\"요청이 거부되었습니다.\"}")
        // return res.status(400).send("{\"errMsg\":\"" + err.message + "\"}")
    }
}

export default deleteSchedule