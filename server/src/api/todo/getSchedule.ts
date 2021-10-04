import express from 'express'
import { HostCheck, SelectData } from '../../../db/connect'

// type schedule = {
//     "TITLE" : string,
//     "CONTENTS" : string,
//     "STARTDT" : string,
//     "STARTTIME" : string,
//     "ENDDT" : string,
//     "ENDTIME" : string,
// }

type datebetween = {
    "SDATE" : string,
    "EDATE" : string
}

async function addSchedule(req:express.Request, res:express.Response) {
    const auth = await HostCheck("todo", req, res)
    if(!auth) return res.status(403).end()
    try{
        const date:Required<datebetween> = req.body
        const rs = await SelectData("todo", `SELECT * FROM TEMP_TODO WHERE STARTDT BETWEEN '${date.SDATE}' AND '${date.EDATE}'
                                                                        OR ENDDT BETWEEN '${date.SDATE}' AND '${date.EDATE}'`)
        return res.status(200).json(rs)
    } catch (err) {
        console.log(err)
        return res.status(400).send("{\"errMsg\":\"요청이 거부되었습니다.\"}")
    }
}

export default addSchedule