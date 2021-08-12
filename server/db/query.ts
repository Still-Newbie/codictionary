const MakeQuery = async (table:string, col:string, where:string, val:string|number) => {

    return `SELECT ${col} FROM ${table} WHERE ${where} = ${val}`
}

export { MakeQuery }