// This is the App Router project's home page.
// The original Pages Router equivalent was pages/index.js.
// our-domain.com/
// no need for React import..

import { connectToDatabase, getAllDocuments} from './helpers/db-utils.js'; 
import MeetupList from './components/meetups/MeetupList';

export default async function HomePage() {
  let client;
  let meetups = [];
  let error = null;

  try {
    const { client: mongoClient} = await connectToDatabase();
    client = mongoClient;
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
    console.error('Failed to fetch meetups from database:', error);
    error = err.message;  
  }

  if (error) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
        <h1 className='text-2x1 font-bold text-red-600 mb-4'>Error</h1>
        <p className='text-gray-700'>{error}</p>
        <p className='text-gray-500 mt-2'>Please check your database connection and try again</p>
      </div>
    );
  }

  return <MeetupList meetups={meetups} />
}