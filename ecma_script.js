import express from "express";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";

const app = express()

app.get("/", (req, resp) => {
    resp.send(Home())
})

app.get("/about", (req, resp) => {
    resp.send(About())
})

app.get("/contact", (req, resp) => {
    resp.send(Contact())
})

app.listen(3400)