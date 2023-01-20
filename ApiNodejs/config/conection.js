const mysql = require ('mysql');
const conection = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'CRUD'
});

conection.connect((err)=>{
    if(err){
        console.log("Sorry, access incorrect: "+ err)
    }else{
        console.log("sure!")
    }
});

module.exports = conection;