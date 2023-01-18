import React from 'react';
// import Logo from './airbnblogo.png';

const Navbar = () => {
  return (
    <div className='flex w-550px h-70px bg-white rounded-t-lg pr-5 mx-5'>
      <div className='px-10 py-4'>
        <img src='/airbnblogo.png' alt='airbnb logo' />
      </div>
    </div>
  );
};
export default Navbar;
