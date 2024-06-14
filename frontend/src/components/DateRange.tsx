import React from 'react';

const DateRange: React.FC = () => {
  const now = new Date();
  const twentyEightDaysAgo = new Date(now.getTime() - 28 * 24 * 60 * 60 * 1000);

  const formatDate = (date: Date) => {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  return (
    <div className='text-2xl mt-5 flex flex-col'>
      <span className='font-semibold'>You need to have the dates</span>
      <span>
        {formatDate(twentyEightDaysAgo)} - {formatDate(now)}
      </span>
    </div>
  );
};

export default DateRange;
