import React from 'react';
import DayOfYear from '../components/DayOfYear';
import CurrentDate from '../components/CurrentDate';
import { useTranslation } from 'react-i18next';
import DateRange from '../components/DateRange';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4 pt-12 md:pt-0 bg-slate-200'>
      <h1 className='text-3xl md:text-4xl lg:text-6xl mb-8 font-bold'>
        {t('controlBookInfo')}
      </h1>
      <DayOfYear />
      <CurrentDate />
      <DateRange />
    </div>
  );
};

export default Home;
