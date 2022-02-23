const express = require('express');
const path = require('path');

const app = express();

//app.use(express.json());
const port = process.env.PORT || 4005;

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../Home.html'));
    res.sendFile(path.join(__dirname,'../pecedis-style.css'));
})

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})