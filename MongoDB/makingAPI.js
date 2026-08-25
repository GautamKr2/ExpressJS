import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

const dbName = 'college';
const client = new MongoClient("mongodb://localhost:27017");

app.set('view engine', 'ejs');
app.set('views', 'MongoDB/views')

client.connect().then(async (connection) => {
    const db = connection.db(dbName);

    const collection = db.collection('students');
    const studentsData = await collection.find().toArray();

    app.get("/api", (req, resp) => {
        resp.send(studentsData)
    })

    app.get("/user", (req, resp) => {
        let filteredData = studentsData.filter((student) => student.name == 'gautam')
        resp.send(filteredData)
    })

    app.get("/ui", (req, resp) => {
        resp.render('studentsData', {studentsData})
    })
})

app.listen(3200)