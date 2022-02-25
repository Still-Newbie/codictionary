import express from 'express'
import mysql from 'mysql'
import dbconfig from '../config/dbconfig'
import authhosts from '../config/authhosts'
import {types, schedule, stamp} from '../config/typeconfig'
import e from 'express'

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
            let error = SqlErr(err.sqlState)
            if(error) res(error)
            else rej(err)
            return;
        }
        res(result);
    })

})

const HostCheck = async (db:string, req:express.Request, res:express.Response) => {
    const host:string = req.headers.host === undefined ? "" : req.headers.host?.toString()
    const hostlist = Object.keys(authhosts).indexOf(db) > -1 ? authhosts[db] : []
    if(hostlist.indexOf(host) > -1)
        return true
    else 
        return false
}

// 데이터 불러오기
// SelectData(프로그램명, 쿼리)
const SelectData = async (program:string, query:string) => {
    const con = await Connect(program)
    const result:any = await Query(con, query)
    return result
}

type data = {
    [index: string]: any
}

// 데이터 넣기
// InsertData(프로그램명, 테이블명, 값) 값이 string이면 자동으로 ' 붙임
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

// 데이터 업데이트
// UpdateData(프로그램, 테이블, 키값, 변경값)
const UpdateData = async (program:string, table:string, key:data, value:data) => {
    const con = await Connect(program)
    const query = ""
    const result = await Query(con, query)
    return result
}

// 데이터 삭제
// DeleteData(프로그램, 테이블, 키값)
const DeleteData = async (program:string, table:string, value:data) => {
    const con = await Connect(program)
    const columns = Object.keys(value)
    let query = `DELETE FROM ${table} WHERE `
    for(let i = 0; i < columns.length; i++){
        if(i > 0) {
            query += " AND "
        }
        query += `${columns[i]} = `
        if(typeof(value[columns[i]]) === "string") query += '"' + value[columns[i]] + '"'
        else query += value[columns[i]]
    }
    const result = await Query(con, query)
    return result
}

// SQL 오류
const SqlErr = async (sqlState:any) => {
    let err = {
        err : true,
        errMsg : ""
    }
    console.log("sqlState : " + sqlState)
    switch (sqlState) {
        case "42000":
            err.errMsg = "개발자에게 문의해주세요(에러코드:42000)"
            return err
            break;
    
        default:
            return false
            break;
    }
}

const ErrMsg = "{\"err\":\"true\",\"errMsg\":\"요청이 거부되었습니다.\"}"

export { HostCheck, SelectData, InsertData, UpdateData, DeleteData, data, ErrMsg, types, schedule, stamp }