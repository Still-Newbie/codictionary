import express from 'express'
import mysql from 'mysql'
import dbconfig from '../config/dbconfig'
import authhosts from '../config/authhosts'

const Connect = async (program:string) => new Promise<mysql.Connection>((res, rej) => {
    let config = dbconfig
    config["database"] = program.toUpperCase()
    const connection = mysql.createConnection(config)
    connection.connect((err) => {
        if (err){
            rej(err);
            return;
        }
        res(connection)
    })
})

const Query = async (con:mysql.Connection, q:string) => new Promise((res:any, rej:any) => {

    con.query(q, con, (err, result) => {
        if (err) {
            rej(err);
            return;
        }
        res(result);
    });

})

const HostCheck = async (db:string, req:express.Request, res:express.Response) => {
    const host:string = req.headers.host === undefined ? "" : req.headers.host?.toString()
    const hostlist = Object.keys(authhosts).indexOf(db) > -1 ? authhosts[db] : []
    if(hostlist.indexOf(host) > -1)
        return true
    else 
        return false
}

const SelectData = async (program:string, query:string) => {
    const con = await Connect(program)
    const result = await Query(con, query)
    return result
}

type data = {
    [index: string]: any
}

const InsertData = async (program:string, table:string, value:data) => {
    const con = await Connect(program)
    const columns = Object.keys(value)
    let col = " ("
    let val = " VALUES ("
    for(let i = 0; i < columns.length; i++){
        if(i > 0) {
            col += ", "
            val += ", "
        }
        col += columns[i]
        if(typeof(value[columns[i]]) === "string") val += '"' + value[columns[i]] + '"'
        else val += value[columns[i]]
    }
    col += ")"
    val += ")"
    const query = `INSERT INTO ${table} ${col} ${val}`
    const result = await Query(con, query)
}

const UpdateData = async (program:string, table:string, value:JSON) => {
    const con = await Connect(program)
    const query = ""
    const result = await Query(con, query)
    return result
}

export { HostCheck, SelectData, InsertData, UpdateData }