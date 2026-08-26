import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'MongoDB/views')

const dbName = 'college';
const client = new MongoClient('mongodb://localhost:27017')

client.connect().then((connection) => {
    const db = connection.db(dbName)
    const collection = db.collection('students');

    app.get("/", async (req, resp) => {
        const studentsData = await collection.find().toArray();
        resp.render('studentsData', {studentsData})
    })

    app.delete('/delete/:id', async (req, resp) => {
        const id = req.params.id
        const result = await collection.deleteOne({_id: new ObjectId(id)})
        if(result) {
            resp.send({Message: "Data deleted", status: true, result: result})
        }
        else {
            resp.send({message: "Data not deleted", success: false, result: result})
        }
    })

    app.get('/delete/:id', async (req, resp) => {
        const id = req.params.id
        const result = await collection.deleteOne({_id: new ObjectId(id)})
        if(result) {
            resp.send('<h1> Data deleted </h1>')
        }
        else {
            resp.send('<h1> Data not deleted </h1>')
        }
    })
})

app.listen(3200)