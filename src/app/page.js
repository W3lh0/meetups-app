// This is the App Router project's home page.
// The original Pages Router equivalent was pages/index.js.
// our-domain.com/
// no need for React import..

import { MongoClient } from 'mongodb';
import MeetupList from './components/meetups/MeetupList';

export default async function HomePage() {
  let client;

  try {
    client = await MongoClient.connect(process.env.MONGODB_URL);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();

    client.close();

    const trasformedMeetups = meetups.map(meetup => ({
      title: meetup.title,
      address: meetup.address,
      image: meetup.image,
      description: meetup.description,
      id: meetup._id.toString(),
    }));

    return <MeetupList meetups={trasformedMeetups} />;

  } catch (error) {
    console.error('Failed to fetch meetups from database:', error);
    if (client) {
      client.close();
    }
    return (
      <>
        <h1>Error fetching data</h1>
        <p>Could not fetch meetups from the database.</p>
        <MeetupList meetups={[]} />
      </>
    );
  }
}