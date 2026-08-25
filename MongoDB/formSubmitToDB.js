import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'MongoDB/views');
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const dbName = 'college';
const client = new MongoClient("mongodb://localhost:27017");

client.connect().then((connection) => {

    app.get('/add-user', (req, resp) => {
        resp.render('add_form');
    })

    app.post('/added', (req, resp) => {
        let userData = req.body;
        const db = connection.db(dbName);
        const collection = db.collection('students');
        collection.insertOne(userData);
        resp.send('<h1> Data submitted </h1>');
    })


    app.post('/add-user-api', async (req, resp) => {
        let userData = req.body;
        let {name, age, email} = userData;
        if(!name || !age || !email) {
            resp.send({message: 'Operation failed', success: false})
            return false;
        }
        const db = connection.db(dbName);
        const collection = db.collection('students');
        let result = await collection.insertOne(userData)
        resp.send({message: "Data stored", success: true, result: result})
    })
})

app.listen(3200)