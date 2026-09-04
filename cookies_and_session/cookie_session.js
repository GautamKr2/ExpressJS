import express from 'express';
import session from 'express-session';

const app = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', './cookies_and_session/views');

app.use(session({
    secret: "result",
    resave: false,
    saveUninitialized: true
}))

app.get("/", (req, resp) => {
    let cookiesData = req.get('cookie').split(';');  // A array of all cookies
    let cookieName = cookiesData[0].split(":")[1]
    console.log(cookieName)

    let data = req.session.data;
    console.log("Home session", data)

    resp.render('home', {name: cookieName, data});
})

app.get("/login", (req, resp) => {
    resp.render('login')
})

app.post("/profile", (req, resp) => {
    resp.setHeader("Set-Cookie", ["login=true", "name="+req.body.name])

    req.session.data = req.body
    console.log("Session: ", req.session.data)

    resp.render('profile');
})

app.listen(3300);