
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL
let url = `mongodb://root:fDvVeIqPcEeD3CoUL1t7yFmn@172.21.178.250:27017/giftdb?authSource=admin`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance;
    }

    const client = new MongoClient(url);

    try {
        // Task 1: Connect to MongoDB
        await client.connect();

        // Task 2: Connect to database and store in dbInstance
        dbInstance = client.db(dbName);

        // Task 3: Return database instance
        return dbInstance;

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

module.exports = connectToDatabase;