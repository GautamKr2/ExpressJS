import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'MongoDB/views')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const dbName = 'college';
const client = new MongoClient('mongodb://localhost:27017');

client.connect().then((connection) => {
    const db = client.db(dbName);
    const collection = db.collection('students');

    app.get("/", async (req, resp) => {
        let studentsData = await collection.find().toArray();
        resp.render('studentsData', {studentsData});
    })

    // Rendering the form
    app.get("/update/:id", async (req, resp) => {
        let id = req.params.id;
        let stdData = await collection.findOne({_id: new ObjectId(id)});
        resp.render('update-student', {stdData});
    })

    // Updating the data through UI
    app.post("/ui/update/:id", async (req, resp) => {
        let id = req.params.id;
        let update = {$set: req.body}
        let result = await collection.updateOne({_id: new ObjectId(id)}, update);
        if(result.modifiedCount == 1) {
            resp.send("<h1> Data updated </h1>")
        }
        else {
            resp.send("<h1> Data not updated </h1>")
        }
    })

    // Updating the data from API
    app.put("/update/:id", async (req, resp) => {
        let id = req.params.id;
        let update = {$set: req.body}
        let result = await collection.updateOne({_id: new ObjectId(id)}, update);
        if(result.modifiedCount == 1) {
            resp.send({message: "data updated", success: true, result: result})
        }
        else {
            resp.send({message: "Data not updated", success: false, result: result})
        }
    })
})

app.listen(3200);