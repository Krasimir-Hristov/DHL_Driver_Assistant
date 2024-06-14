import React from 'react';
import DayOfYear from '../components/DayOfYear';
import CurrentDate from '../components/CurrentDate';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4 pt-12 md:pt-0 '>
      <h1 className='text-4xl md:text-4xl lg:text-6xl mb-8'>{t('welcome')}</h1>
      <DayOfYear />
      <CurrentDate />
    </div>
  );
};

export default Home;
