// our-domain.com/new-meetup.page.js
// This page renders a new meeting -form App Router -enviroment.
// In original Page Roter file whas pages/new-meetup.js.

// Import NewMeetupForm-component.
// Path corrected to match component placement in src/app/components/ folder.
"use client";

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;