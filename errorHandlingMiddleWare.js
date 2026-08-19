import express from 'express';
const app = express();

app.get("/", (req, resp) => {
    resp.send("<h1>Home Page</h1>")
})

app.get("/about", (req, resp) => {
    resp.send("<h1>About Page</h1>")
})

app.get("/error", (req, resp, next) => {
    const error = new Error()  // New error generated for checking error handling functionality
    error.status = 404
    next(error)
})

function errorHandling(error, req, resp, next) {  // Error handling function
    resp.status(error.status || 500).send("Server in mentainance")
}
app.use(errorHandling)  // use of error handling function

app.listen(3400)