import express from "express";
import path from 'path';

const app = express();
let absPath = path.resolve('html')

let publicPath = path.resolve('public')
app.use(express.static(publicPath))

app.get("/", (req, resp) => {
    // let absPath = path.resolve('html/home.html');
    resp.sendFile(absPath+"/home.html")
})

app.get("/about", (req, resp) => {
    // let absPath = path.resolve('html/about.html');
    resp.sendFile(absPath+"/about.html")
})

app.get("/service", (req, resp) => {
    // let absPath = path.resolve('html/service.html');
    resp.sendFile(absPath+"/service.html")
})

app.use("", (req, resp) => {
    // let absPath = path.resolve("html/404.html")
    resp.status(404).sendFile(absPath+"/404.html")
})

app.listen(3400);