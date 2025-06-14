"use client";
import MainNavigation from './MainNavigation';

function MainLayout(props) {
  return (
    <div className='min-h-screen flex flex-col items-center'>
      <MainNavigation />
      <main className='w-11/12 max-w-[40rem] my-12 mx-auto flex-grow'>
        {props.children}
      </main>
    </div>
  );
}

export default MainLayout;
