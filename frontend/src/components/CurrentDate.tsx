import React from 'react';
import { useTranslation } from 'react-i18next';

const CurrentDate: React.FC = () => {
  const { t } = useTranslation();

  const now = new Date();
  const dateString = now.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className='text-2xl'>
      <span>{t('currentDate')}:</span>{' '}
      <span className='font-bold'>{dateString}</span>
    </div>
  );
};

export default CurrentDate;
