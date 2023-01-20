
require('./config/conection');

const express = require('express');

const port = (process.env.port || 3000);

const app = express();


//config of port

app.set('port', port)


//router

app.use('/api', require('./router'))

//express init

app.listen(app.get('port'), (err)=>{
    if(err){
        console.log('Advertence server univale: '+err)
    }else{
        console.log('susceffly conection in the port: '+port)
    }
})

