import express from 'express';
import path from 'path';
const app = express();

app.use(express.static('public'))  // Module for using static files
app.use(express.urlencoded({extended:false}))  // module for getting submitted data by users

app.get("/", (req, resp) => {
    let filePath = path.resolve("html/home.html")
    resp.sendFile(filePath)
})

app.get("/about", (req, resp) => {
    resp.send("<h1>About Page</h1>")
})

app.get("/login", (req, resp) => {
    resp.send(`
        <form action='/submit' method='post'>
            <input type='text' placeholder='Enter email' name='email'/> <br/><br/>
            <input type='password' placeholder='Enter password' name='pass'/> <br/><br/>
            <button> Submit </button>
        </form>
    `)
})

app.post("/submit", (req, resp) => {
    resp.send("<h1>Data submitted</h1>")
    console.log(req.body)
})

app.listen(3200)