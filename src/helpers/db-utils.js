// src/helpers/db-utils.js
import { MongoClient } from "mongodb";

const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;

if (!MONGODB_URL) {
    throw new Error('Please define the MONGODB_URL enviroment veriable inside .env.local');
}

if (!MONGODB_DB_NAME) {
    throw new Error('Please define the MONGODB_DB_NAME');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        console.log('Using cached database connection.');
        return { client: cachedClient, db: cachedDb };
    }

    console.log('Using cached database connection.');

    try {
        const client = await MongoClient.connect(MONGODB_URL);
        const db = client.db(MONGODB_DB_NAME);

        cachedClient = client;
        cachedDb = db;

        console.log('Successfully connected to MongoDB.');
        return { client, db };
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw new Error('Failed to connect to database');
    }
}

export async function insertDocument(client, collection, document) {
    try {
        const db = client.db(MONGODB_DB_NAME);
        const result = await db.collection(collection).insertOne(document);
        console.log(`Document inserted into ${collection}`, result);
        return result;
    } catch (error) {
        console.error(`Failed to insert document into ${collection}:`, error);
        throw new Error('Failed to insert data');
    }
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
    try {
        const db = client.db(MONGODB_DB_NAME);
        const document = await db.collection(collection).find(filter).sort(sort).toArray();
        return document;
    } catch (error) {
        console.error(`Failed to fetch documents from ${collection}:`, error);
        throw new Error('Failed to fetch data.');
    }
}

export async function getOneDocument(client, collectionName, filter = {}) {
    const db = client.db(MONGODB_DB_NAME);
    const document = await db.collection(collectionName).findOne(filter);
    return document;
}