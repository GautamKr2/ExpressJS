import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json())

const schema = mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

mongoose.connect("mongodb://localhost:27017/college").then(async () => {
    const dbModel = mongoose.model('student', schema)
    let studentsData = await dbModel.find()

    app.get("/", (req, resp) => {
        resp.send(studentsData)
    })

    app.post("/create", async (req, resp) => {
        let newStd = req.body
        const result = await dbModel.create(newStd)
        resp.send({message: "Data inserted", success: true})
    })

    app.put("/update/:id", async (req, resp) => {
        let id = req.params.id
        const result = await dbModel.findByIdAndUpdate(id, req.body )
        resp.send({message: "Data updated", success:true})
    })

    app.delete("/delete/:id", async (req, resp) => {
        let id = req.params.id
        const result = await dbModel.findByIdAndDelete(id)
        resp.send({message: "Data updated", success: true})
    })
})

app.listen(3201)