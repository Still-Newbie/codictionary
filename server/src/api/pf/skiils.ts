import express from 'express'

async function skiils (req:express.Request, res:express.Response) {
    return res.status(200).send("skiils")
}

export default skiils
