import express from 'express';
const app = express();

function routeMiddleWare(req, resp, next) {
    if(!req.query.age || req.query.age<18) {
        resp.send("You are not allowed to access this page.")
    }
    else{
        next()
    }
}

function checkLogin(req, resp, next) {
    if(!req.query.loggedIn || req.query.loggedIn==0) {
        resp.send("You have not logged in.<br/>Please login first !")
    }
    else {
        next()
    }
}

app.get("/", (req, resp) => {
    resp.send("<h1> Home Page </h1>")
})

// Two middleWare in this route
app.get("/login", routeMiddleWare, checkLogin, (req, resp) => {
    resp.send("<h1> Login Page </h1>")
})

app.get("/users", (req, resp) => {
    resp.send("<h1> Users Page </h1>")
})

// Single middleWare in this route
app.get("/admin", routeMiddleWare, (req, resp) => {
    resp.send("<h1> Admin Page </h1>")
})

app.listen(3200)