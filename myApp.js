let express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
let app = express();
require("dotenv").config()

function MyApp ()  {
    return 
}

// #1
// console.log("Hello World")

// #2
// app.get("/", (req,res) => {
//     res.json("Hello express")
// })

// #4
app.use("/public", express.static(__dirname+"/public"))

// #3
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})

//#5
// app.get("/json", (re,res) => {
//     res.json({
//         "message":"Hello json"
//     })
// })

app.get("/json", (req,res) => {
    if(process.env["MESSAGE_STYLE"] == "uppercase"){
        res.json({
            "message":"HELLO JSON"
        })
    }else{
        res.json({
            "message":"Hello json"
        })
    }
})

module.exports = app;
