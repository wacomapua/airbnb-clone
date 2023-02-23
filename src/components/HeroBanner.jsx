import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <div className='flexbox place-content-center mt-0.5 rounded-sm bg-white'>
      {/* <div className='pt-7 justify-flex w-full px-11'> */}
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <img src='/hero.png' alt='hero banner' className='pt-7 w-full px-11' />
        {/* </div> */}
      </motion.div>
      <div className='pt-7'>
        <p className='font-semibold text-xl pt-5 pl-5 md:text-[28px] lg:text-4xl'>
          Online Experiences
        </p>
        <p className='pl-5 max-w-sm lg:text-xl md:text-lg text-xs pt-3 pb-6'>
          Join unique interactive activities led by one-of-a-kind hosts - all
          without leaving home
        </p>
      </div>
    </div>
  );
};
export default HeroBanner;
