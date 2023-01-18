import React from 'react';

const HeroBanner = () => {
  return (
    <div className='flexbox place-content-center mt-0.5 rounded-sm bg-white mx-5'>
      <div className='pt-7 justify-flex px-11'>
        <img
          src='/hero.png'
          alt='hero banner'
          className='w-full md:w-full lg:w-full px-11'
        />
      </div>
      <div className='pt-7'>
        <p className='font-semibold text-xl pt-5 pl-11 md:text-4xl lg:text-6xl'>
          Online Experiences
        </p>
        <p className='pl-11 max-w-md lg:text-xl md:text-lg text-xs pt-3 pb-6'>
          Join unique interactive activities led by one-of-a-kind hosts - all
          without leaving home
        </p>
      </div>
    </div>
  );
};
export default HeroBanner;
