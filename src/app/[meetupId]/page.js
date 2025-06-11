// src/app/[meetupId]
// This file renders the details page for a single meetup in the App Router enviroment.
// The original Page Router equivalent was pages/[meetupId]/index.js

import MeetupDetail from '../components/meetups/MeetupDetail.js';

export async function generateStaticParams() {
    
    const meetups = [
        {id: 'm1'},
        {id: 'm2'},
    ];

    return meetups.map(meetup => ({
        meetupId: meetup.id,
    }));
}

async function MeetupDetails({ params }) {
    const meetupId = params.meetupId;

    console.log('Fetching data for meetupId:', meetupId);

    const meetupData = {
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Vaasan_ammattikorkeakoulu_2018.jpg',
        id: meetupId,
        title: `TEMP PLACEHOLDER: Meetup ${meetupId}`,
        address: 'TEMP PLACEHOLDER: Some Street 5, Some City',
        description: 'TEMP PLACEHOLDER: This is a meetup for coding enthusiasts.',
    };

    return (
        <MeetupDetail
            image={meetupData.image}
            title={meetupData.title}
            address={meetupData.address}
            description={meetupData.description}
        />
    );
}

export default MeetupDetails;
