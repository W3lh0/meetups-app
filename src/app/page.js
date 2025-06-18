// This is the App Router project's home page.
// The original Pages Router equivalent was pages/index.js.
// our-domain.com/
// no need for React import..

import { connectToDatabase, getAllDocuments} from '@/helpers/db-utils.js'; 
import MeetupList from '@/components/meetups/MeetupList.js';
import classes from './page.module.css';
import { auth0 } from '@/lib/auth0';
import Link from 'next/link';

export default async function HomePage() {
  let meetups = [];
  let error = null;
  let session = null;

  try {
    session = await auth0.getSession();
    const user = session ? session.user : null;
    console.log(session);

    if (user) {
      const client = await connectToDatabase();
      const fetchMeetups = await getAllDocuments(client, 'meetups', { _id: -1 });
      
      const transformedMeetups = fetchMeetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
    }));
   
      console.log('Successfully fetched meetups for homepage.');
      meetups = transformedMeetups;
    } else {
      console.log('User not logged in, skipping meetup fetch.');
    }

  } catch (err) {
    console.error('Failed to fetch meetups from database:', err);
    error = err.message;  
  }

  return (
    <div>
      {session ? (
        <>
          <h2 className={classes.welcomeMessage}>Welcome, {session.user.name}!</h2>
          <p className={classes.loggedInStatus}>You are logged in. You can now use the application!</p>
          <div className={classes.actions}>
            <Link href="/auth/logout" className={classes.linkButton}>Logout</Link>
          </div>
          {meetups.length > 0 ? (
            <MeetupList meetups={meetups} />
          ) : (
            <p className={classes.noMeetups}>No Meetups to display or not logged in.</p>
          )}
        </>
      ) : (
        <div className={classes.loginPrompt}>
          <p>Log in to use the application and see the Meetup events.</p>
          <Link href='/auth/login' className={classes.linkButton}>Log in</Link>
        </div>
      )} 

      {error && (
          <div className={classes.errorContainer}>
          <h1 className={classes.errorTitle}>Error!</h1>
          <p className={classes.errorMessage}>Please check your database connection and try again</p>
        </div>
      )}
    </div>
  );
}
