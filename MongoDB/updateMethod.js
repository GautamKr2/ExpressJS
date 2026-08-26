import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();

const dbName = 'college';
const client = new MongoClient('mongodb://localhost:27017');

client.connect().then((connection) => {
    
})