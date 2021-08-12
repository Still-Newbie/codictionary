import mysql from 'mysql'
import dbconfig from '../config/dbconfig'

const GetData = async (program:string, query:string) => {
    const con = await Connect(program)
    const result = await Query(con, query)
    return result
}

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

export default GetData