import React from 'react';

export default function Card(props) {
  return (
    <div className='bg-white px-4'>
      <div className='flexbox w-[90px] md:w-[130px] lg:w-[160px]'>
        <div>
          <img
            src={props.img}
            alt='katie'
            className='w-[90px] md:w-[130px] lg:w-[160px] drop-shadow-md'
          />
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
