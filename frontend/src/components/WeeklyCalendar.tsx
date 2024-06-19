import React, { useState } from 'react';
import {
  format,
  addDays,
  startOfWeek,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  getDay,
} from 'date-fns';
import { enUS, bg, ro, de, ru, tr, it, hu, el, sq } from 'date-fns/locale';
import { weekOffDays } from '../constants/index';

type Props = {
  startWeek: number;
  locale:
    | string
    | 'enUS'
    | 'bg'
    | 'ro'
    | 'de'
    | 'ru'
    | 'tr'
    | 'it'
    | 'hu'
    | 'gr'
    | 'al';
};

const locales = { enUS, bg, ro, de, ru, tr, it, hu, el, sq };
const i18nToLocaleMap: Record<Props['locale'], keyof typeof locales> = {
  enUS: 'enUS',
  bg: 'bg',
  ro: 'ro',
  de: 'de',
  ru: 'ru',
  tr: 'tr',
  it: 'it',
  hu: 'hu',
  gr: 'el', // променено от 'gr' на 'el', тъй като 'gr' няма в date-fns
  al: 'sq',
};

const WeeklyCalendar: React.FC<Props> = ({ startWeek, locale }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const generateDates = (startWeek: number, currentMonth: Date) => {
    const start = startOfWeek(startOfMonth(currentMonth), { weekStartsOn: 1 });
    const end = endOfMonth(currentMonth);
    const dates = [];
    let currentDate = start;

    while (currentDate <= end) {
      const weekNumber: number =
        ((startWeek + Math.floor(dates.length / 7) - 1) % 9) + 1;
      const offDays: number[] = weekOffDays[weekNumber];
      const weekDates = Array.from({ length: 7 }, (_, index) => {
        const date = addDays(currentDate, index);
        const dayOfWeek = getDay(date);
        const adjustedDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek; // Adjust Sunday to 7
        const isOffDay = offDays.includes(adjustedDayOfWeek);
        const isSunday = adjustedDayOfWeek === 7;
        return { date, isOffDay, isSunday };
      });
      dates.push(...weekDates);
      currentDate = addDays(currentDate, 7);
    }

    return dates.filter(({ date }) => isSameMonth(date, currentMonth));
  };

  const dates = generateDates(startWeek, currentMonth);

  const handlePreviousMonth = () => {
    setCurrentMonth((prev) => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => addMonths(prev, 1));
  };

  return (
    <div className='max-w-md mx-auto p-4'>
      <div className='flex justify-between mb-4'>
        <button
          onClick={handlePreviousMonth}
          className='p-2 bg-blue-500 text-white rounded'
        >
          Предишен
        </button>
        <h2 className='text-lg font-bold'>
          {format(currentMonth, 'MMMM yyyy', {
            locale: locales[i18nToLocaleMap[locale]],
          })}
        </h2>
        <button
          onClick={handleNextMonth}
          className='p-2 bg-blue-500 text-white rounded'
        >
          Следващ
        </button>
      </div>
      <div className='grid grid-cols-7 gap-1 sm:gap-2'>
        {dates.map(({ date, isOffDay, isSunday }, index) => (
          <div
            key={index}
            className={`p-1 sm:p-2 border text-xs sm:text-sm 
              ${
                isOffDay
                  ? 'bg-green-500'
                  : isSunday
                  ? 'bg-gray-500'
                  : 'bg-yellow-500'
              }
            `}
          >
            {format(date, 'EEE, MMM d', {
              locale: locales[i18nToLocaleMap[locale]],
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
