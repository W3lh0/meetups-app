// This is the App Router project's home page.
// The original Pages Router equivalent was pages/index.js.
// our-domain.com/
// no need for React import..

import MeetupList from './components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup: Vaasankatu',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Vaasan_ammattikorkeakoulu_2018.jpg',
    address: 'Vaasankatu, Vaasa',
    description: 'This is a first meetup! Picture: Maritime Museum of Finland, CC BY-SA 4.0',
  },
  {
    id: 'm2',
    title: 'Second Meetup: VAMK',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Vaasan_ammattikorkeakoulu_2018.jpg',
    address: 'Wolffintie 30, Vaasa',
    description: 'This is a second meetup! Picture: Santeri Viinamäki, 2018m CC BY-SA 4.0',
  },
];

export default async function HomePage() {
  const meetups = DUMMY_MEETUPS;

  return (
    <MeetupList meetups={meetups} />
  );
}