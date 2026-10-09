import express from 'express';
import nodemailer from "nodemailer";
import "dotenv/config";

const app = express();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gautamkumar11008@gmail.com',
        pass: process.env.app_pass
    }
})

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");

app.get("/mail", (req, resp) => {
    resp.render('mail');
})

app.post("/submit-mail", (req, resp) => {
    console.log(req.body);

    const mailOptions = {
        from: "gautamkumar11008@gmail.com",
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.mail
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            resp.send("<h1>Email not sent</h1>");
        }
        else {
            resp.send(`<h1>Email sent</h1>`);
        }
    })

    
})

app.listen(3200);