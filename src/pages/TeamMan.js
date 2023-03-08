import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import rightArrow from './../assets/rightArrow.svg';
import leftArrow from './../assets/leftArrow.svg';
import { employeeData } from '../utils/dummyData';

const TeamMan = () => {
  const pageLength = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedList, setPaginatedList] = useState(
    employeeData.slice(0, pageLength)
  );

  const pageNum = Math.ceil(employeeData.length / pageLength);

  useEffect(() => {
    setPaginatedList(
      employeeData.slice(
        (currentPage - 1) * pageLength,
        (currentPage - 1) * pageLength + pageLength
      )
    );
  }, [currentPage]);

  const handlePage = (e) => {
    const action = parseInt(e.target.id);
    setCurrentPage(currentPage + action);
  };

  return (
    <div className='p-6 min-h-screen'>
      <Nav page='Employee Management' />
      <div className='block text-gray-600 shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)] overflow-x-auto mt-8 mb-4 rounded-2xl pt-6'>
        <div className='w-[50rem] sm:w-[60rem] lg:w-full'>
          <div></div>
          <h2 className='ml-8 font-semibold text-gray-600 mb-8'>Employees</h2>
          <header className='flex text-gray-400 text-xs mb-4 ml-8'>
            <h2 className='w-[36%]'>EMPLOYEE</h2>
            <h2 className='w-[20%]'>TITLE</h2>
            <h2 className='w-[18%] text-center'>STATUS</h2>
            <h2 className='w-[18%] text-center'>EMPLOYED</h2>
            <h2 className='w-[8%]'></h2>
          </header>
          {paginatedList.map((employee, index) => {
            return (
              <div key={index}>
                <hr />
                <div className='flex pl-4 lg:pl-8 items-center h-20 text-xs break-words text-gray-600'>
                  <div className='w-[36%] flex'>
                    <div className='flex items-center justify-center mr-4 overflow-clip rounded-xl shadow-[0_5px_10px_0px_rgba(0,0,0,0.12)]'>
                      <img
                        className='object-contain w-10'
                        src={require('../assets/' + employee.photoURL)}
                        alt='profilePhoto'
                      />
                    </div>
                    <div className='text-sm flex flex-col justify-center'>
                      <h2>{employee.fullName}</h2>
                      <h2 className='text-gray-400'>{employee.email}</h2>
                    </div>
                  </div>
                  <div className='w-[20%] text-sm text-gray-500'>
                    {employee.title}
                  </div>
                  <div className='w-[18%] flex justify-center'>
                    <div
                      className={`${
                        employee.status === 'FREE'
                          ? 'bg-green-500'
                          : employee.status === 'ON FIELD'
                          ? 'bg-red-600'
                          : 'bg-gray-400'
                      } px-3 py-1 rounded-lg text-white font-semibold`}
                    >
                      {employee.status}
                    </div>
                  </div>
                  <div className='w-[18%] text-gray-500 flex justify-center'>
                    {employee.dateOfEmployement}
                  </div>
                  <div className='w-[8%]'>
                    <h2 className='px-4 py-1 border-1 border rounded-lg cursor-pointer text-gray-500 inline-block'>
                      Edit
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='flex  justify-center select-none items-center my-4 gap-4'>
        <div
          id='-1'
          onClick={(e) => handlePage(e)}
          className={`${
            currentPage === 1 ? 'opacity-0 pointer-events-none' : null
          } cursor-pointer md:hover:bg-[#6cd1ce] rounded-xl flex justify-center items-center h-8 w-14 bg-[#00a19c]`}
        >
          <img
            className='w-10 pointer-events-none'
            src={leftArrow}
            alt='left'
          />
        </div>
        <div className='rounded-xl text-white flex justify-center items-center h-8 w-14 bg-[#00a19c]'>
          <h2>
            {currentPage} / {pageNum}
          </h2>
        </div>
        <div
          id='1'
          onClick={(e) => handlePage(e)}
          className={`${
            currentPage === pageNum ? 'opacity-0 pointer-events-none' : null
          } cursor-pointer md:hover:bg-[#6cd1ce] rounded-xl flex justify-center items-center h-8 w-14 bg-[#00a19c]`}
        >
          <img
            className='w-10 pointer-events-none'
            src={rightArrow}
            alt='right'
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMan;
