import React from 'react';
import { Link } from 'react-router-dom';
import { FlagIcon } from 'react-flag-kit';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className='fixed w-full top-0 bg-yellow-500 p-2 md:p-4 z-50'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <Link to='/' className='text-red-700 text-4xl font-bold mb-4 md:mb-0'>
          <div className='flex gap-5'>
            <p>{t('title')}</p>
            <p className='text-black font-bold '>{t('indicator')}</p>
          </div>
        </Link>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-nowrap justify-center md:justify-start'>
            <button
              onClick={() => changeLanguage('en')}
              className='text-black hover:text-white mx-2'
            >
              <FlagIcon code='GB' size={24} />
            </button>
            <button
              onClick={() => changeLanguage('bg')}
              className='text-black hover:text-white mx-2'
            >
              <FlagIcon code='BG' size={24} />
            </button>
            <button
              onClick={() => changeLanguage('ro')}
              className='text-black hover:text-white mx-2'
            >
              <FlagIcon code='RO' size={24} />
            </button>
            <button
              onClick={() => changeLanguage('de')}
              className='text-black hover:text-white mx-2'
            >
              <FlagIcon code='DE' size={24} />
            </button>
            <button
              onClick={() => changeLanguage('al')}
              className='text-black hover:text-white mx-2'
            >
              <FlagIcon code='AL' size={24} />
            </button>
            <button
              onClick={() => changeLanguage('gr')}
              className='text-black hover:text-white mx-2'
            >
              <FlagIcon code='GR' size={24} />
            </button>
            <button
              onClick={() => changeLanguage('it')}
              className='text-black hover:text-white mx-2'
            >
              <FlagIcon code='IT' size={24} />
            </button>
            <button
              onClick={() => changeLanguage('tr')}
              className='text-black hover:text-white mx-2'
            >
              <FlagIcon code='TR' size={24} />
            </button>
            <button
              onClick={() => changeLanguage('ru')}
              className='text-black hover:text-white mx-2'
            >
              <FlagIcon code='RS' size={24} />
            </button>
            <button
              onClick={() => changeLanguage('hu')}
              className='text-black hover:text-white mx-2'
            >
              <FlagIcon code='HU' size={24} />
            </button>
          </div>
          <div className='flex justify-center md:justify-start mt-8 md:mt-0'>
            <Link to='/login' className='text-black hover:text-white mx-2'>
              {t('login')}
            </Link>
            <Link to='/register' className='text-black hover:text-white mx-2'>
              {t('register')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
