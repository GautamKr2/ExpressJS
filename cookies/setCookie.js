import express from 'express';

const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', './cookies/views');


app.get("/", (req, resp) => {
    let cookiesData = req.get('cookie').split(';');  // A array of all cookies
    let cookieName = cookiesData[0].split(":")[1]
    console.log(cookieName)
    resp.render('home', {name: cookieName});
})

app.get("/login", (req, resp) => {
    resp.render('login');
})

app.post("/profile", (req, resp) => {
    resp.setHeader("Set-Cookie", ["login=true", "name="+req.body.name])
    resp.render('profile');
})

app.listen(3300);