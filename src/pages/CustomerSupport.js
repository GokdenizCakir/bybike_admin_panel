import React from 'react';
import Nav from '../components/Nav';
import { employeeData, invoiceData } from '../utils/dummyData';
import calendar from './../assets/calendar.svg';
import pdf from './../assets/pdf.svg';
import wallet from './../assets/wallet.svg';

const CustomerSupport = () => {
  const user = employeeData[0];
  return (
    <div className='p-6'>
      <Nav page='Customer Support' />
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 my-5'>
        <div className='text-gray-600 whitespace-nowrap font-semibold'>
          <h2 className='text-2xl'>User Information</h2>
          <hr className='my-4' />
          <div className='block p-4 overflow-x-auto text-xs sm:text-sm lg:text-base text-gray-600 shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)] rounded-2xl'>
            <table>
              <tbody>
                <tr>
                  <td className='py-3 w-full'>User ID:</td>
                  <td className='py-3 font-normal text-gray-500'>
                    {user.userID}
                  </td>
                </tr>
                <tr>
                  <td className='py-3 '>First Name:</td>
                  <td className='py-3 font-normal text-gray-500'>
                    {user.fullName.split(' ')[0]}
                  </td>
                </tr>
                <tr>
                  <td className='py-3 '>Surname:</td>
                  <td className='py-3 font-normal text-gray-500'>
                    {user.fullName.split(' ').slice(-1)}
                  </td>
                </tr>
                <tr>
                  <td className='py-3 '>Age:</td>
                  <td className='py-3 font-normal text-gray-500'>{user.age}</td>
                </tr>
                <tr>
                  <td className='py-3 '>Email:</td>
                  <td className='py-3 font-normal text-gray-500'>
                    {user.email}
                  </td>
                </tr>
                <tr>
                  <td className='py-3'>Phone Number:</td>
                  <td className='py-3 font-normal text-gray-500'>
                    {user.phoneNumber}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='text-gray-600 whitespace-nowrap  font-semibold'>
          <h2 className='text-2xl'>Last Ride Information</h2>
          <hr className='my-4' />
          <div className='block p-4 overflow-x-auto text-xs sm:text-sm lg:text-base text-gray-600 shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)] rounded-2xl'>
            <table>
              <tbody>
                <tr>
                  <td className='py-3 w-full'>Vehicle ID:</td>
                  <td className='py-3 font-normal text-gray-500'>#483745</td>
                </tr>
                <tr>
                  <td className='py-3'>Vehicle Status:</td>
                  <td className='py-3 font-normal text-gray-500'>Active</td>
                </tr>
                <tr>
                  <td className='py-3'>Starting Dock:</td>
                  <td className='py-3 font-normal text-gray-500'>Kağıthane</td>
                </tr>
                <tr>
                  <td className='py-3'>Arrival Dock:</td>
                  <td className='py-3 font-normal text-gray-500'>
                    Gaziosmanpaşa
                  </td>
                </tr>
                <tr>
                  <td className='py-3'>Invoice:</td>
                  <td className='py-3 font-normal text-gray-500'>50TL</td>
                </tr>
                <tr>
                  <td className='py-3'>Payment Details:</td>
                  <td className='py-3 font-normal text-gray-500'>
                    **** **** **** 1234
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='text-gray-600 whitespace-nowrap font-semibold'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl'>Activities</h2>
            <div className='flex text-xs gap-1 mr-2 text-gray-400'>
              <img className='w-4' src={calendar} alt='date:' />
              <h2>23 - 30 March 2023</h2>
            </div>
          </div>
          <hr className='my-4' />
          <div className='flex justify-between items-center p-2 pr-4  text-sm lg:text-base text-gray-600 shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)] rounded-2xl'>
            <div className='flex gap-4'>
              <div className='w-16 h-16 shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)] flex justify-center items-center rounded-[0.8rem] bg-gradient-to-tl from-[#7928ca] to-[#ff0080]'>
                <img className='w-6' src={wallet} alt='wallet' />
              </div>
              <div className='flex flex-col justify-center'>
                <h2>Balance</h2>
                <h2 className='text-gray-400 text-xs lg:text-sm font-normal'>
                  Total Balance
                </h2>
              </div>
            </div>
            <h2 className='font-medium'>2000 TL</h2>
          </div>
          <div className='block mt-4 p-4 overflow-x-auto text-xs sm:text-sm lg:text-base text-gray-600 shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)] rounded-2xl'></div>
        </div>
        <div className='text-gray-600 whitespace-nowrap font-semibold'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl'>Invoices</h2>
            <div className='border border-[#cb0c9f] sm:hover:bg-[#cb0c9f] sm:hover:text-white cursor-pointer sm:transition-colors text-[#cb0c9f] text-xs px-6 py-2 rounded-2xl'>
              VIEW ALL
            </div>
          </div>
          <hr className='my-4' />
          <div className='block px-4 overflow-x-auto text-xs lg:text-sm text-gray-600 shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)] rounded-2xl'>
            {invoiceData.map((invoice, index) => {
              return (
                <div
                  key={index}
                  className='flex justify-between items-center py-4'
                >
                  <div>
                    <h2>{invoice.date}</h2>
                    <h3 className='text-gray-400 font-normal text-xs'>
                      {invoice.id}
                    </h3>
                  </div>
                  <div className='flex items-center text-xs'>
                    <h2 className='text-gray-500 font-normal '>
                      {invoice.amount}
                    </h2>
                    <div className='flex cursor-pointer p-2 ml-2 sm:ml-6 items-center'>
                      <img className='w-5 mr-1' src={pdf} alt='pdf' />
                      <h2 className='text-gray-700'>PDF</h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
