const express = require('express');
const app = express();

// route to request and response
app.get('/', (req,res)=> {
    res.send("Hello PPU - Omar Azeez");
});

app.listen(5050, ()=> {
    console.log('Listening on port 5050')
});