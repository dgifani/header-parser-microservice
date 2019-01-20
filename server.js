'use strict'

/* 
 * Add Express and cors 
*/
const express = require('express');
const cors = require('cors');
const port =   process.env.PORT || 3000;

const app = express();
app.use(cors({optionSuccessStatus: 200, methods: ['GET', 'OPTIONS']}));


app.get("/api/whoami", (req, res) => {

   const response = {
       "ipaddress":  req.headers['x-forwarded-for'] ||  req.connection.remoteAddress,
       "language": req.headers['accept-language'],       
       "software": req.headers["user-agent"]
    };
    
    res.json(response);

})


app.listen( port, () => console.log(`Server Listening on port: ${port}`))

module.exports = app;