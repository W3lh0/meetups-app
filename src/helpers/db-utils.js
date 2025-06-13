import { MongoClient } from "mongodb";

const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;

if (!MONGODB_URL) {
    throw new Error('Please define the MONGODB_URL environment variable inside .env.local');
}

if (!MONGODB_DB_NAME) {
    throw new Error('Please define the MONGODB_DB_NAME environment variable');
}

let cachedClient = null;

export async function connectToDatabase() {
    if (cachedClient) {
        console.log('Using cached database connection.');
        return cachedClient;
    }

    console.log('Connecting to new database connection.');

    try {
        const client = await MongoClient.connect(MONGODB_URL);
        cachedClient = client;

        console.log('Successfully connected to MongoDB.');
        return client;
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

export async function getOneDocument(client, collection, filter = {}) {
    try {
        const db = client.db(MONGODB_DB_NAME);
        const document = await db.collection(collection).findOne(filter);
        return document;
    } catch (error) {
        console.error(`Failed to fetch document from ${collection}:`, error);
        throw new Error('Failed to fetch data.');
    }
}