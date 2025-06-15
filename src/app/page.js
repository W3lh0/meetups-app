// This is the App Router project's home page.
// The original Pages Router equivalent was pages/index.js.
// our-domain.com/
// no need for React import..

import { connectToDatabase, getAllDocuments} from '@/helpers/db-utils.js'; 
import MeetupList from '@/components/meetups/MeetupList.js';
import classes from './page.module.css';

export default async function HomePage() {
  let meetups = [];
  let error = null;

  try {
    const client = await connectToDatabase();
    const fetchMeetups = await getAllDocuments(client, 'meetups', { _id: -1 });
    
    const trasformedMeetups = fetchMeetups.map(meetup => ({
      id: meetup._id.toString(),
      title: meetup.title,
      address: meetup.address,
      image: meetup.image,
      description: meetup.description,
  }));

    console.log('Successfully fetched meetups for homepage.');
    meetups = trasformedMeetups;

  } catch (err) {
    console.error('Failed to fetch meetups from database:', err);
    error = err.message;  
  }

  if (error) {
    return (
      <div className={classes.errorContainer}>
        <h1 className={classes.errorTitle}>Error</h1>
        <p className={classes.errorMessage}>Please check your database connection and try again</p>
      </div>
    );
  }

  return <MeetupList meetups={meetups} />
}