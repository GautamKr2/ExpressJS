import express from 'express';
const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded())

app.get("/", (req, resp) => {
    resp.render("home", {name: 'Gautam Kumar', age: 22})
});

app.get("/add-user", (req, resp) => {
    resp.render("addUser")
});

app.post("/submit-user", (req, resp) => {
    resp.render('submitUser', req.body)
});

app.get("/users", (req, resp) => {
    const users = ['Gautam', 'Amit', 'Suman', 'Sashi', 'Ravi']
    resp.render('users', {user:users, isLogin:true, age:23})
})

app.listen(3400)