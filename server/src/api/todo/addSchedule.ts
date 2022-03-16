import express from 'express'
import todo from '.'
import { InsertData, HostCheck, ErrMsg} from '../../../db/connect'
import { todoTypes } from 'todo'

async function addSchedule(req:express.Request, res:express.Response) {
    const auth = await HostCheck("todo", req, res)
    if(!auth) return res.status(403).end()
    try{
        // 받아올 수 없는 정보(IP, PK) 추가
        req.body.RIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress
        req.body.TODOKEY = "GETKEY('" + req.body.USERID + "', 'TODO')"
        // REQUEST로 받아와서TYPE검사X 나중에 다 시확인 *****
        const schd:todoTypes.Schedule = req.body
        const rs = await InsertData("todo", "TODOLIST", schd)
        return res.status(200).json(rs)
    } catch (err) {
        console.log(err)
        return res.status(400).send(ErrMsg)
    }
}

export default addSchedule