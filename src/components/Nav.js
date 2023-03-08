import search from './../assets/search.svg';
import settings from './../assets/settings.svg';
import curvedLines from './../assets/curved.jpg';
import notification from './../assets/notification.svg';
import { useRecoilState } from 'recoil';
import { sideState } from '../globalStates/atom';

const Nav = ({ page }) => {
  const [sideOpened, setSideOpened] = useRecoilState(sideState);

  return (
    <div className='flex z-20 overflow-hidden rounded-2xl justify-center relative'>
      <img
        className='object-cover h-72 min-w-[1024px]'
        src={curvedLines}
        alt='img'
      />
      <div className='absolute inset-0 opacity-60 bg-gradient-to-l from-[#7928ca] to-[#ff0080]'></div>
      <nav className='absolute flex flex-col md:flex-row justify-between font-light text-sm w-full px-8 py-8 text-white'>
        <div className='mt-14 md:mt-0'>
          <h3>
            <span className='text-white/60'>Pages</span> / {page}
          </h3>
          <h2 className='font-normal text-lg'>{page}</h2>
        </div>
        <div className='flex  mt-8 md:mt-0'>
          {/* <div className='flex items-center bg-white h-10 rounded-xl'>
            <div className='w-10 p-2 cursor-pointer'>
              <img src={search} alt='search' />
            </div>
            <input
              placeholder='Type here...'
              className='outline-none pl-4 text-black focus:outline-none h-10 w-auto sm:w-60 rounded-xl'
              type='text'
            />
          </div> */}
          <div className='flex absolute top-0 right-0 m-4 md:m-8 md:relative items-center ml-auto md:mt-0 md:mr-0 md:ml-8 mb-2 space-x-1 sm:space-x-6'>
            <img
              className='inline-block h-10 p-2 cursor-pointer accent-white'
              src={settings}
              alt='settings'
            />
            <img
              className='h-10 p-2 cursor-pointer'
              src={notification}
              alt='notification'
            />
            <div
              onClick={() => setSideOpened(!sideOpened)}
              className='p-2 cursor-pointer block md:hidden'
            >
              <svg
                className='overflow-visible'
                width='28'
                height='16'
                viewBox='0 0 28 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line
                  className={` origin-left duration-500 transition-all`}
                  y1='1'
                  x2='28'
                  y2='1'
                  strokeLinecap='round'
                  stroke='white'
                  strokeWidth='2.4'
                />
                <line
                  className={`duration-300 transition-all`}
                  y1='8'
                  x2='28'
                  y2='8'
                  strokeLinecap='round'
                  stroke='white'
                  strokeWidth='2.4'
                />
                <line
                  className={`origin-left duration-500 transition-all`}
                  y1='15'
                  x2='28'
                  y2='15'
                  strokeLinecap='round'
                  stroke='white'
                  strokeWidth='2.4'
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
