
const mysql =require('mysql2');

module.exports=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'todo'
})


// module.exports=mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: 'todo'
// })