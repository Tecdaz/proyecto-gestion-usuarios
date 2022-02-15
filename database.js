const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'tzuzul Bootcamp'
})

function query(sql, data) {
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (error, result) => {
            if (error) {
                reject(error.sqlMessage)
            } else {
                resolve(result)
            }
        })
    })
}

async function insert(tablename, data) {
    try {
        await query(`INSERT INTO ${tablename}(??) VALUES(?)`, [Object.keys(data), Object.values(data)])
        return { data, success: true }
    } catch (error) {
        return { error, success: false }
    }
}

async function del(tablename, data){
    try{
        await query(`DELETE FROM ${tablename} WHERE id = ?`,[data])
        return {data, success:true}
    }catch(error){
        return {error, success:false}
    }
}

module.exports = {query, insert, del}