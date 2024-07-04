//GET API METHOD 
const express = require('express');
const dbConnect = require('./connectionfile');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
});

//POST API METHOD

// app.post('/', (req,res)=>{     // code for ,writing data in postman and get it in nodejs
//     console.log(req.body);
//     res.send(req.body)
// });

// sending data from postman to mongodb

app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);    //req.body takes data from postman body 
    res.send(result);                              // req.send will send acknowledge and other data in postman
    console.log(result);                           // this console will print the same thing of isse upar wali line in console.
});

// PUT API METHOD 
app.put('/', async(req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne(
    {name:"amityadav"},
    {$set:req.body}            // static way  $set:{name:"i phone 15"}
    )
    res.send({ "result": "update hogya" })
});

app.listen(5400);