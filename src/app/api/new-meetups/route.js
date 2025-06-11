import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

// This file is created according to App Router conventions.
// In the original Page Router assignment, the corresponding API rout would have been located at:
// /src/pages/api/new-meetup.js and it would have used a single 'handler' function.

export async function POST(request) {
    let client;

    try {
        const data = await request.json();

        console.log('Recived data:', data);

        client = await MongoClient.connect(
            process.env.MONGODB_URL
        );

        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log('Inserted document ID:', result.insertedId);

        return NextResponse.json(
            { message: 'Meetup added successfully', recivedData: data },
            { status: 201}
        );
    } catch (error) {
        console.error('Error handling POST request', error);
        return NextResponse.json(
            { message: 'Failed to add meetup.', error: error.message },
            { status: 500 }
        );
    } finally {
        if (client) {
            await client.close();
            console.log('MongoDB client close.');
        }
    }
}

// In App Router, if there are no other exported methods (e.g., GET),
// other methods will automatically return 405 (Method Not Allowed).
// In the original assignment, a separate 'else' block would be needed for a 405 error.