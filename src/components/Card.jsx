import React from 'react';

export default function Card(props) {
  return (
    <div className='bg-white px-4'>
      <div className='flex flex-col relative w-[90px] md:w-[130px] lg:w-[160px]'>
        <div className='relative'>
          <img
            src={props.img}
            alt='picture'
            className='relative w-[90px] md:w-[130px] lg:w-[160px] drop-shadow-md hover:opacity-80 transition duration-300 ease-in-out'
          />
          {props.openSpots === 0 && (
            <img
              src='/soldout.png'
              alt='sold out'
              className='absolute top-1.5 left-1.5 w-[30px] md:w-[40px] lg:w-[50px]'
            />
          )}
          {props.location === 'Online' && (
            <img
              src='/online.png'
              alt='online'
              className='absolute top-1.5 left-1.5 w-[30px] md:w-[40px] lg:w-[50px]'
            />
          )}
        </div>
        <div className='pt-2'>
          <ul className='text-[10px] md:text-sm lg:text-md font-sans'>
            <li className=''>
              <img
                src='/staricon.png'
                alt='star'
                className='w-[8px] md:w-[10px] lg:w-[12px] inline align-baseline pr-0.5'
              />
              {props.rating}{' '}
              <span className=''>
                ({props.reviewCount}) · {props.location}
              </span>
            </li>
            <li className='antialiased'>{props.title}</li>
            <li>
              <strong>From ${props.price}</strong> / person
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
