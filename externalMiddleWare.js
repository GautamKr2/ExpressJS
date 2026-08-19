import express from "express";
import morgan from 'morgan';  // External middleWare for getting the request type and route
const app = express();

app.use(morgan('dev'))  // Use of external middleWare
// It gives request type, route, and execution time

app.get("/", (req, resp) => {
    resp.send("<h1> Home Page </h1>")
})

app.get("/login", (req, resp) => {
    resp.send("<h1> Login Page </h1>")
})

app.get("/wait", (req, resp) => {  // Used to check the execution time
    setTimeout(() => {
        resp.send("<h1>Wait for 1 second</h1>")
    }, 1000);
})

app.listen(3400)