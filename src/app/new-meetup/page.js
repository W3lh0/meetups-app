// our-domain.com/new-meetup.page.js
// This page renders a new meeting -form App Router -enviroment.
// In original Page Roter file whas pages/new-meetup.js.

// Import NewMeetupForm-component.
// Path corrected to match component placement in src/app/components/ folder.
"use client";

import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { useRouter } from 'next/navigation';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    console.log('Received data from form:', enteredMeetupData);

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log('API response data:', data);

    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;