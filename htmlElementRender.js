import express from 'express';
import Home from './pages/home.js';
import Form from './pages/form.js';
const app = express();

app.get("/", (req, resp) => {
    resp.send(Home());
})

app.get("/login", (req, resp) => {
    resp.send(Form());
})

app.post("/submit", (req, resp) => {
    resp.send("<h1>Data Submitted</h1> <a href='/'>Go to Home</a>");
})

app.listen(3200)
