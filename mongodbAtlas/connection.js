import "dotenv/config";
import { MongoClient } from "mongodb";
import express from 'express';

const app = express();

// const url = "mongodb+srv://gautamkumar11008_db_user:<db_password>@cluster0.ogi8jai.mongodb.net/?appName=Cluster0";
const url = process.env.db_url
const database = "college";
const client = new MongoClient(url);

client.connect().then(async (connection) => {
    const db = connection.db(database);
    const collection = db.collection("student");
    const result = await collection.find().toArray();
    console.log(result);
    app.get("/", (req, resp) => {
        resp.send(result);
    })
})

app.listen(3200);