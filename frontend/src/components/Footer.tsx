import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='bg-yellow-500 p-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
        <Link to='/' className='text-red-700 text-2xl font-bold'>
          <div className='flex gap-2 items-center'>
            <p>DHL Driver Assistant</p>
            {/* <p className='text-black font-extrabold'>{t('indicator')}</p> */}
          </div>
        </Link>
        <p className='text-black font-bold text-lg mt-2 md:mt-0'>
          Created by: KRASIMIR HRISTOV
        </p>
      </div>
    </footer>
  );
};

export default Footer;
