"use client";
import MainNavigation from './MainNavigation';
import classes from './MainLayout.module.css'

function MainLayout(props) {
  return (
    <div className={classes.container}>
      <MainNavigation />
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  );
}

export default MainLayout;
