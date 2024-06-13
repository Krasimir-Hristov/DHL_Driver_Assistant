import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className='bg-yellow-500 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/' className='text-red-700 text-4xl font-bold'>
          <div className='flex gap-5'>
            <p>{t('title')}</p>
            <p className='text-black font-bold '>{t('indicator')}</p>
          </div>
        </Link>
        <div>
          <button
            onClick={() => changeLanguage('en')}
            className='text-black hover:text-white mx-2'
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('bg')}
            className='text-black hover:text-white mx-2'
          >
            BG
          </button>
          <Link to='/login' className='text-black hover:text-white mx-2'>
            {t('login')}
          </Link>
          <Link to='/register' className='text-black hover:text-white mx-2'>
            {t('register')}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
