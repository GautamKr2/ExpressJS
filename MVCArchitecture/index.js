import express from 'express';
import { handleUser } from './controller/userController.js';
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'MVCArchitecture/views')

app.get("/", (req, resp) => {
    resp.send('<h1> Home Page </h1>')
})

app.get('/users', handleUser)

app.listen(3400)