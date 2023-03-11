import React from 'react';
import bybike from './../assets/favicon.png';
import cross from './../assets/cross.svg';
import { Link } from 'react-router-dom';
import { sideState } from '../globalStates/atom';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

const Sidebar = () => {
  const [sideOpened, setSideOpened] = useRecoilState(sideState);

  useEffect(() => {
    window.addEventListener('resize', () => setSideOpened(false));
  }, []);

  return (
    <div
      className={`${
        sideOpened ? 'translate-x-0 w-screen' : '-translate-x-80 w-0'
      } z-50 absolute shadow-[0_0px_10px_0px_rgba(0,0,0,0.5)] md:sticky bg-white md:translate-x-0 md:w-80 flex flex-col items-center h-screen transition-all min-w-80 p-4`}
    >
      <div
        onClick={() => setSideOpened(false)}
        className='w-12 mt-4 p-2 md:hidden'
      >
        <img src={cross} alt='cross' />
      </div>
      <div className='flex h-16 p-10 items-center justify-center'>
        <img className='h-8' src={bybike} alt='' />
        <h2 className='text-base ml-1 whitespace-nowrap'>ByBike Dashboard</h2>
      </div>
      <hr className='w-full border-0 h-[0.08rem] mb-4 bg-gradient-to-r from-gray-50 via-gray-300 to-gray-50' />
      <Link
        onClick={() => setSideOpened(false)}
        to='employee_management'
        className='flex items-center font-normal text-base md:text-sm w-full px-6 p-2 text-gray-600'
      >
        <div className='flex justify-center items-center mr-4 p-2 rounded-md shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <circle cx='9' cy='7' r='4'></circle>
            <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
            <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
            <path d='M21 21v-2a4 4 0 0 0 -3 -3.85'></path>
          </svg>
        </div>
        <h2 className='whitespace-nowrap'>Employee Man.</h2>
      </Link>
      <Link
        onClick={() => setSideOpened(false)}
        to='/operation_dashboard'
        className='flex items-center font-normal text-base md:text-sm w-full px-6 p-2 text-gray-600'
      >
        <div className='flex justify-center items-center mr-4 p-2 rounded-md shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <circle cx='5' cy='18' r='3'></circle>
            <circle cx='19' cy='18' r='3'></circle>
            <polyline points='12 19 12 15 9 12 14 8 16 11 19 11'></polyline>
            <circle cx='17' cy='5' r='1'></circle>
          </svg>
        </div>
        <h2>Operation Dashboard</h2>
      </Link>
      <Link
        onClick={() => setSideOpened(false)}
        to='/profile'
        className='flex items-center font-normal text-base md:text-sm w-full px-6 p-2 text-gray-600'
      >
        <div className='flex justify-center items-center mr-4 p-2 rounded-md shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <circle cx='12' cy='7' r='4'></circle>
            <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
          </svg>
        </div>
        <h2>Profile Page</h2>
      </Link>
      <Link
        onClick={() => setSideOpened(false)}
        to='/user_info'
        className='flex items-center font-normal text-base md:text-sm w-full px-6 p-2 text-gray-600'
      >
        <div className='flex justify-center items-center mr-4 p-2 rounded-md shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <circle cx='12' cy='7' r='4'></circle>
            <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>
          </svg>
        </div>
        <h2>User Information</h2>
      </Link>
    </div>
  );
};

export default Sidebar;
