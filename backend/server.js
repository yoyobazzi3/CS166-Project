import express from 'express';

const app = express();

app.get('/', (req,res) =>{
    res.send(`Welcome to fishing`)
})

app.listen(3000, () => {
    console.log(`app is listening on http://localhost:3000`)
})