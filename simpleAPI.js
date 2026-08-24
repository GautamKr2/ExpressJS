import express from 'express';

import userData from './users.json' with {type:'json'}

const app = express();

app.get("/", (req, resp) => {
    resp.send(userData)
})

app.get("/user/:id", (req, resp) => {
    let userId = req.params.id;
    let filterData = userData.filter((user)=> user.id==userId)
    resp.send(filterData)
})

app.get("/users/:name", (req, resp) => {
    let userName = req.params.name;
    let filterData = userData.filter((user)=>user.name.toLowerCase()==userName.toLowerCase())
    resp.send(filterData)
})

app.listen(32000)