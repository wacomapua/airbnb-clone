import React from 'react';

const Card = () => {
  return (
    <div className='bg-white px-11'>
      <div className='flexbox w-[90px] md:w-[140px] lg:w-[190px]'>
        <div>
          <img
            src='/katie.png'
            alt='katie'
            className='w-[90px] md:w-[140px] lg:w-[190px]'
          />
        </div>
        <div className='pt-2'>
          <ul className='text-[10px] md:text-sm lg:text-md font-sans'>
            <li className=''>
              <img
                src='/staricon.png'
                alt='star'
                className='w-[8px] md:w-[10px] lg:w-[14px] inline align-baseline pr-0.5'
              />
              5.0 <span className=''>(6) USA</span>
            </li>
            <li className='antialiased'>Life lessons with Katie Zaferes</li>
            <li>
              <strong>From $136</strong> / person
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Card;
