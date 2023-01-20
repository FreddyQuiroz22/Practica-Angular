const router = require('express').Router()
const conection = require('./config/conection')



//router asigment---------------------------------

router.get('/', (req, res)=>{
    let sql = 'select * from table_team'
    conection.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


//-------------------------------------------------

module.exports = router;