"use client";
import Link from 'next/link';
import styles from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Meetups!
      </div>
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link href='/' className={styles.link}>
              All Meetups
            </Link>
          </li>
          <li>
            <Link href='/new-meetup' className={styles.link}>
              Add New Meetup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
