import React from 'react';

const Card = () => {
  return (
    <div className='bg-white px-11'>
      <div className='flexbox'>
        <div>
          <img
            src='/katie.png'
            alt='katie'
            className='w-1/4 md:w-1/3 lg:w-2/5'
          />
        </div>
        <div>
          <ul className='text-xs md:text-sm lg:text-lg'>
            <li>5.0(6)-USA</li>
            <li>Life lessons with Katie Zaferes</li>
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
