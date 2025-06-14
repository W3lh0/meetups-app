"use client";
import MainNavigation from './MainNavigation';
import styles from './MainLayout.module.css'

function MainLayout(props) {
  return (
    <div className={styles.container}>
      <MainNavigation />
      <main className={styles.main}>
        {props.children}
      </main>
    </div>
  );
}

export default MainLayout;
