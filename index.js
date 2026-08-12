// const express = require('express')
import express from 'express'

const app = express()
app.get("/", (req, resp) => {
    resp.send("<h1>Now on express Home Page.</h1>")
})

app.get("/about", (req, resp) => {
    resp.send("<h1>This is About Page.</h1>")
})

app.get("/contact", (req, resp) => {
    resp.send("<h1>This is Contact Page.</h1>")
})
app.listen(3200)