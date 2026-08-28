import express from 'express';
import mongoose from 'mongoose';

const app = express();

async function connectMongoDB() {
    await mongoose.connect("mongodb://localhost:27017/college");
    const schema = mongoose.Schema({
        name: String,
        email: String,
        age: Number
    })
    const dbModel = mongoose.model('students', schema);
    const result = await dbModel.find();
    console.log(result);

    app.use("/", (req, resp) => {
        resp.send(result);
    })
}

connectMongoDB()

app.listen(3200);