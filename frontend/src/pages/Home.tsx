import React from 'react';
import DayOfYear from '../components/DayOfYear';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4 pt-12 md:pt-0'>
      <h1 className='text-6xl md:text-8xl mb-8'>Home Page</h1>
      <DayOfYear />
    </div>
  );
};

export default Home;
