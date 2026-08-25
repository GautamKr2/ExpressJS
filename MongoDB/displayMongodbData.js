import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

const dbName = 'college';
const url = "mongodb://localhost:27017";
const client = new MongoClient(url)

/*
async function dbConnection() {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('students');

    let studentsData = await collection.find().toArray();
    console.log(studentsData)
}
dbConnection()
*/

app.set('view engine', 'ejs');
app.set('views', './MongoDB/views');

app.get("/", async (req, resp) => {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection('students');

    let studentsData = await collection.find().toArray();
    resp.render("studentsData", {studentsData})
})

app.listen(3200)