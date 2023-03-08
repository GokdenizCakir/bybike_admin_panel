import React from 'react';
import { useFormik } from 'formik';
import { passwordValSchema } from '../utils/validations';
import { Link, useParams } from 'react-router-dom';
import logo from './../assets/favicon.png';

const LoginPassword = () => {
  const phoneNumber = useParams().phoneNumber;
  const onSubmit = async (values) => {
    console.log(values);
    console.log(phoneNumber);
    window.location.pathname = '/profile';
    // const res = await axios.post('', JSON.stringify({
    //   phoneNumber,
    //   password: values.password
    // }), {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // });
  };

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: passwordValSchema,
    onSubmit,
  });

  return (
    <>
      <section className='h-screen bg-[#e8fffe] flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center md:scale-110 lg:scale-125 w-screen h-screen sm:h-auto sm:w-80 rounded-2xl shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] p-8'>
          <img className='mb-4' src={logo} alt='ByBike' />
          <form className='w-full' action='#' onSubmit={formik.handleSubmit}>
            <div className='w-full'>
              <h2 className='text-gray-500 font-semibold'>Password</h2>
              <input
                type='password'
                name='password'
                className={`bg-transparent border-b-2 mb-4 border-[#00a19c] text-gray-500 sm:text-md py-1 text-center focus:placeholder:opacity-0 focus:outline-none block w-full  placeholder-[#4f7775] ${
                  formik.errors.password && formik.touched.password
                    ? 'border-red-500 focus:border-red-500'
                    : 'focus:border-[#00a19c] hover:border-[#85d0ce] '
                }}`}
                required={true}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.errors.error && (
              <div className='text-red-500 text-sm text-center border-b border-red-500 py-2'>
                {formik.errors.error}
              </div>
            )}

            <button
              type='submit'
              id='submit-text'
              disabled={formik.isSubmitting || !formik.isValid}
              className='w-full mb-1 text-white bg-[#00a19c] focus:ring-4 focus:outline-none focus:ring-primary-300 px-5 py-2 sm:py-3 text-center transition-all duration-150 ease-in-out hover:scale-105 hover:bg-[#7fd8d5] disabled:bg-[#98b3b2]'
            >
              Login
            </button>

            <div className='flex items-center justify-between text-sm'>
              <Link href='#' className='text-[#328481] sm:hover:text-[#00a19c]'>
                Forgot Password
              </Link>
              <Link
                href='/register'
                className='text-[#328481] sm:hover:text-[#00a19c]'
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPassword;
