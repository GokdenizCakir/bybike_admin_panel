import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './Auth/Login';
import Profile from './pages/Profile';
import TeamMan from './pages/TeamMan';
import UserInfo from './pages/UserInfo';
import LoginPassword from './Auth/LoginPassword';
import DefaultPassLogin from './Auth/DeafultPassLogin';
import Operation from './pages/Operation';

const App = () => {
  const { pathname } = useLocation();

  const pathsWithNav = [
    '/profile',
    '/user_info',
    '/operation_dashboard',
    '/employee_management',
  ];
  if (pathsWithNav.includes(pathname)) {
    return (
      <div className='md:h-screen relative flex'>
        <Sidebar />
        <div className=' w-full overflow-x-hidden'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/user_info' element={<UserInfo />} />
            <Route path='/operation_dashboard' element={<Operation />} />
            <Route path='/employee_management' element={<TeamMan />} />
          </Routes>
        </div>
      </div>
    );
  } else {
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/login/:phoneNumber' element={<LoginPassword />} />
        <Route
          path='/login/set_new_password/:phoneNumber'
          element={<DefaultPassLogin />}
        />
        <Route path='*' element={<div>Lost track ?</div>} />
      </Routes>
    );
  }
};

export default App;
