import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'MongoDB/views')

const dbName = 'college';
const client = new MongoClient('mongodb://localhost:27017');

client.connect().then((connection) => {
    const db = client.db(dbName);
    const collection = db.collection('students');

    app.get("/", async (req, resp) => {
        let studentsData = await collection.find().toArray();
        resp.render('studentsData', {studentsData});
    })

    app.get("/update/:id", async (req, resp) => {
        let id = req.params.id;
        let stdData = await collection.findOne({_id: new ObjectId(id)});
        resp.render('update-student', {stdData});
    })
})

app.listen(3200);