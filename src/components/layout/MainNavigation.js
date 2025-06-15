"use client";
import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        Meetups!
      </div>
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link href='/' className={classes.link}>
              All Meetups
            </Link>
          </li>
          <li>
            <Link href='/new-meetup' className={classes.link}>
              Add New Meetup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
