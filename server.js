const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.user('/',(req, res)=>{
    res.send('This is my First Containerized Application');
})
app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
});