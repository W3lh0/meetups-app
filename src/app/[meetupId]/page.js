// src/app/[meetupId]
// This file renders the details page for a single meetup in the App Router enviroment.
// The original Page Router equivalent was pages/[meetupId]/index.js

import { ObjectId } from 'mongodb';
import { connectToDatabase, getOneDocument, getAllDocuments } from '@/helpers/db-utils.js';
import MeetupDetail from '@/components/meetups/MeetupDetail.js';

export async function generateStaticParams() {
    let client;

    try {
        client = await connectToDatabase();
        const meetups = await getAllDocuments(client, 'meetups', { _id: 1});

        return meetups.map(meetup => ({
            meetupId: meetup._id.toString(),
        }));
    } catch (error) {
        console.error('Failed to generate static params:', error);
        return [];
    }
}

async function MeetupDetails({ params }) {
    const meetupId = await params.meetupId;
    let client;
    let selectedMeetup;

    if (!ObjectId.isValid(meetupId)) {
        return <p className="text-red-600 text-center py-8">Error: Invalid meetup ID provider.</p>;
    }

    try {
        client = await connectToDatabase();
        const meetupObjectId = new ObjectId(meetupId);
        selectedMeetup = await getOneDocument(client, 'meetups', { _id: meetupObjectId});
    } catch (error) {
        console.error('Failed to fetch meetup details:', error);
        return <p className='text-red-600 text-center py-8'>Error: Failed to download meetup details</p>;
    } 

    if (!selectedMeetup) {
        return <p className='text-center py-8 text-xl font-semibold'>Can&apos;t find meetup</p>
    }

    const transformedMeetupData = {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
    };

    return (
        <MeetupDetail
            title={transformedMeetupData.title}
            image={transformedMeetupData.image}
            address={transformedMeetupData.address}
            description={transformedMeetupData.description}
        />
    );
}

export default MeetupDetails;