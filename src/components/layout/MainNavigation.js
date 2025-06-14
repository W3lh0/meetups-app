"use client";
import Link from 'next/link';

function MainNavigation() {
  return (
    <header className='w-full h-20 flex items-center justify-between bg-[#77002e] px-[10%]'>
      <div className='text-[2rem] text-white font-bold'>
        Meetups!
      </div>
      <nav>
        <ul className='list-none m-0 p-0 flex items-baseline'>
          <li className='ml-12'>
            <Link href='/' className='no-underline text-[1.5rem] text-[#fcb8d2] hover:text-white'>
              All Meetups
            </Link>
          </li>
          <li>
            <Link href='/new-meetup' className='no-underline text-[1.5rem] text-[#fcb8d2] hover:text-white'>
              Add New Meetup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
