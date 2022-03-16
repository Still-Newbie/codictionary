import express from 'express'
import { HostCheck, SelectData, ErrMsg } from '../../../db/connect'

type dateBetween = {
    SDATE : string,
    EDATE : string,
    USERID : string
}


async function addSchedule(req:express.Request, res:express.Response) {
    const auth = await HostCheck("todo", req, res)
    if(!auth) return res.status(403).end()
    try{
        // REQUEST로 받아와서... *****
        const date:dateBetween = req.body
        const rs = await SelectData("todo", `SELECT * FROM TODOLIST WHERE USERID = '${date.USERID}' 
                                                                      AND (STARTDT BETWEEN '${date.SDATE}' AND '${date.EDATE}'
                                                                          OR ENDDT BETWEEN '${date.SDATE}' AND '${date.EDATE}')`)
        return res.status(200).json(rs)
    } catch (err) {
        console.log(err)
        return res.status(400).send(ErrMsg)
    }
}

export default addSchedule