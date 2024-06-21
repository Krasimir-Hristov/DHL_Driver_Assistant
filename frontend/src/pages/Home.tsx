import React, { useState } from 'react';
import DayOfYear from '../components/DayOfYear';
import CurrentDate from '../components/CurrentDate';
import { useTranslation } from 'react-i18next';
import DateRange from '../components/DateRange';
import WeeklyCalendar from '../components/WeeklyCalendar';
import TextField from '@mui/material/TextField';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [startWeek, setStartWeek] = useState<number>(1); // Използваме 1 като стойност по подразбиране

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10); // Парсваме входа към число
    if (!isNaN(value) && value >= 1 && value <= 9) {
      setStartWeek(value); // Обновяваме стойността на startWeek
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setStartWeek((prev) => Math.min(prev + 1, 9)); // Увеличаваме стойността, ограничена до максимум 9
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setStartWeek((prev) => Math.max(prev - 1, 1)); // Намаляваме стойността, ограничена до минимум 1
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center px-4 pt-12 md:pt-0 bg-slate-200'>
      <h1 className='text-3xl md:text-4xl lg:text-6xl mb-8 font-bold'>
        {t('controlBookInfo')}
      </h1>
      <DayOfYear />
      <CurrentDate />
      <DateRange />
      <div className='mt-5'>
        <h2 className='text-xl font-bold'>Add your group</h2>
        <TextField
          type='number' // Използваме тип number, за да позволим въвеждане на числа
          value={startWeek.toString()} // Преобразуваме стойността в string за компонентът
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          inputProps={{
            min: 1,
            max: 9,
            style: { textAlign: 'center' },
          }}
          className='p-2 mt-4 border rounded text-center'
          placeholder='Enter start week (1-9)'
        />
        <WeeklyCalendar startWeek={startWeek} locale={i18n.language} />
      </div>
    </div>
  );
};

export default Home;
