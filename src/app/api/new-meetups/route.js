import { NextResponse } from "next/server";
import { connectToDatabase, insertDocument } from "@/helpers/db-utils.js";
import { revalidatePath } from "next/cache";
// This file is created according to App Router conventions.
// In the original Page Router assignment, the corresponding API rout would have been located at:
// /src/pages/api/new-meetup.js and it would have used a single 'handler' function.

export async function POST(request) {
    let client;

    try {
        const data = await request.json();

        if (!data.title || !data.address || !data.description || !data.image) {
            return NextResponse.json(
                { message: 'Invalid input. Please fill all required fields' },
                { status: 422 }
            );
        }

        console.log('Received data:', data);

        const { client: mongoClient, db } = await connectToDatabase();
        client = mongoClient;

        const result = await insertDocument(client, 'meetups', data);

        console.log('Inserted document ID:', result.insertedId);

        revalidatePath('/');

        return NextResponse.json(
            { message: 'Meetup added successfully', recivedData: data, insertedId: result.insertedId },
            { status: 201}
        );
    } catch (error) {
        console.error('Error handling POST request', error);
        return NextResponse.json(
            { message: 'Failed to add meetup.', error: error.message },
            { status: 500 }
        );
    }
}

// In App Router, if there are no other exported methods (e.g., GET),
// other methods will automatically return 405 (Method Not Allowed).
// In the original assignment, a separate 'else' block would be needed for a 405 error.