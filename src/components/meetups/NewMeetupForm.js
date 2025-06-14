"use client"
import { useRef } from 'react';
import InputControl from '../ui/InputControl';
import Card from '../ui/Card';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className='p-4' onSubmit={submitHandler}>
        <InputControl
          label="Meetup Title"
          type="text"
          id="title"
          inputRef={titleInputRef}
          required
        />
        <InputControl
          label="Meetup Image"
          type="url"
          id="image"
          inputRef={imageInputRef}
          required
        />
        <InputControl
          label="Address"
          type="text"
          id="address"
          inputRef={addressInputRef}
          required
        />
        <InputControl
          label="Description"
          type="textarea"
          id="description"
          inputRef={descriptionInputRef}
          required
          rows="5"
        />

        <div className='mt-4 text-right'>
          <button className='cursor-pointer font-inherit bg-[#77002e] text-white py-2 px-6 border border-solid border-[#77002e] rounded font-bold hover:bg-[#a50e48] hover:border-[#a50e48]'>
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
