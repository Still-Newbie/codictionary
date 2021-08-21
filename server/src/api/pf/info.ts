import express from 'express'
import { SelectData, HostCheck } from '../../../db/connect'

async function info (req:express.Request, res:express.Response) {
    const result = await SelectData("pf", "SELECT * FROM INFO")
    return res.status(200).json(result)
}

export default info
