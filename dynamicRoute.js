import express from 'express';
const app = express();

app.get('/', (req, resp) => {
    resp.send('Home page');
})

app.get('/user', (req, resp) => {
    const users = ['Gautam', 'Amit', 'Sintu', 'Rajeev'];
    let data = `<ul>`;
    for(let i=0; i<users.length; i++) {
        data += `<li><a href='/user/${users[i]}'> ${users[i]} </a></li>`;
    }
    data += `</ul>`;
    resp.send(`<h1>User Page</h1> ${data}`)
})

app.get('/user/:name', (req, resp) => {
    const userName = req.params.name;
    resp.send(`This is ${userName}'s profile page`)
})

app.listen(3200);