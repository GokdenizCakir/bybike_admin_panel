import React from 'react';
import profilePic from './../assets/profilePic.jpg';
import Nav from '../components/Nav';
import wrench from './../assets/wrench.svg';
import instagram from './../assets/instagram.svg';
import linkedin from './../assets/linkedin.svg';
import github from './../assets/github.svg';
import facebook from './../assets/facebook.svg';

const Profile = () => {
  return (
    <div className='p-6'>
      <Nav page='Profile' />
      <div className='flex md:flex-row flex-col gap-4 justify-between items-center p-2 sm:p-4 mx-2 sm:mx-10 -mt-14 z-30 relative rounded-2xl bg-white/80 backdrop-blur shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)]'>
        <div className='flex items-center justify-between'>
          <div className='w-20 flex items-center justify-center overflow-clip rounded-2xl shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)]'>
            <img
              className='object-contain'
              src={profilePic}
              alt='profilePhoto'
            />
          </div>
          <div className='ml-1 sm:ml-8'>
            <h2 className='text-base sm:text-2xl text-gray-700'>
              Gökdeniz Çakır
            </h2>
            <h2 className='text-sm text-gray-500'>Front End Dev</h2>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='rounded-full w-2 h-2 sm:w-4 sm:h-4 bg-red-600'></div>
          <h2 className='text-sm sm:text-base text-red-600'>On Field</h2>
        </div>
        <div className='text-gray-600 gap-2 p-4 cursor-pointer flex items-center'>
          <img className='w-6' src={wrench} alt='' />
          <h2>Edit</h2>
        </div>
      </div>
      <div className='block text-gray-600 shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)] my-8 rounded-2xl px-4 md:px-12 p-2 md:p-6'>
        <h2 className='text-lg mb-4'>Profile Information</h2>
        <h2 className='text-gray-400 text-sm mb-8'>
          Selam ben Gökdeniz back end ve front end alanında çalışıyorum
        </h2>
        <div className='gap-2 text-sm sm:text-base text-gray-400 flex flex-col'>
          <h2 className='flex justify-between'>
            Full Name: <span className='text-gray-600'>Gökdeniz Çakır</span>
          </h2>
          <h2 className='flex justify-between'>
            Mobile: <span className='text-gray-600'>+90 505 017 0482</span>
          </h2>
          <h2 className='flex justify-between'>
            Email: <span className='text-gray-600'>gokdeniz@gmail.com</span>
          </h2>
          <h2 className='flex justify-between'>
            Location: <span className='text-gray-600'>Türkiye, İstanbul</span>
          </h2>
        </div>
        <div className='flex mt-4 gap-2'>
          <img
            className='w-12 cursor-pointer p-2'
            src={instagram}
            alt='instagram'
          />
          <img
            className='w-12 cursor-pointer p-2'
            src={linkedin}
            alt='instagram'
          />
          <img
            className='w-12 cursor-pointer p-2'
            src={github}
            alt='instagram'
          />
          <img
            className='w-12 cursor-pointer p-3'
            src={facebook}
            alt='instagram'
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
