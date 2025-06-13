"use client"; // This marks the component as a Clinet Component.

import { useRouter } from 'next/navigation';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <li className='my-4 mx-0'>
      <Card>
        <div className='w-full h-80 overflow-hidden rounded-t1-md rounded-tr-md'>
          <img 
            src={props.image}
            alt={props.title}
            className='w-full h-full object-cover' 
          />
        </div>
        <div className='text-center p-4'>
          <h3 className='text-xl text=[#2c292b]'>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className='p-6 text-center'>
          <button
            onClick={showDetailsHandler}
            className='cursor-pointer font-inherit text-[#77002e] border border-solid border-[#77002e] bg-trasparent py-2 px-6 rounded gover:text-white hover:bg-[#ffe2ed]'
          >
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
