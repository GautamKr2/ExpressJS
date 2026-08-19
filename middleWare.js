import express from 'express';
const app = express()

// Middleware start
/*
It will run before every route in this file.
You can use here login section before entering your pages.
Also can check that use is logged in or not.
*/
/*function middleWare(req, resp, next) {
    console.log(req.url)
    next()
}
app.use(middleWare)*/

app.use((req, resp, next) => {
    let ip = req.socket.remoteAddress
    console.log(ip)
    next()
})


// Middleware end

app.get("/", (req, resp) => {
    resp.send("<h1> Home Page </h1>")
})

app.get("/about", (req, resp) => {
    resp.send("<h1> About Page </h1>")
})

app.get("/contact", (req, resp) => {
    resp.send("<h1> Contact Page </h1>")
})

app.listen(3200)