// src/components/DayOfYear.tsx

import React from 'react';

const DayOfYear: React.FC = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);

  return <div>Day of the year: {day}</div>;
};

export default DayOfYear;
