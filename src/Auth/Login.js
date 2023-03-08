import React, { useState } from 'react';
import { useFormik } from 'formik';
import { codeValSchema, loginValSchema } from '../utils/validations';
import { Link } from 'react-router-dom';
import logo from './../assets/favicon.png';
import axios from 'axios';

const Login = () => {
  const [isVerifyShown, setIsVerifyShown] = useState(false);
  const handleVerify = () => {
    window.location.pathname = '/login/set_new_password/' + formik.values.phone;
  };
  const onSubmit = async (values) => {
    const isPasswordDefault = false;
    console.log(values);
    // const res = await axios.post('', JSON.stringify(formik.values), {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // });

    if (isPasswordDefault) {
      setIsVerifyShown(true);
    } else {
      window.location.pathname = '/login/' + formik.values.phone;
    }
  };

  const formik = useFormik({
    initialValues: {
      phone: '',
    },
    validationSchema: loginValSchema,
    onSubmit,
  });

  const formikVerify = useFormik({
    initialValues: {
      code: '',
    },
    validationSchema: codeValSchema,
    onSubmit: handleVerify,
  });

  return (
    <>
      <section className='h-screen bg-[#e8fffe] flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center md:scale-110 lg:scale-125 w-screen h-screen sm:h-auto sm:w-80 rounded-2xl shadow-[0_5px_50px_0px_rgba(0,0,0,0.12)] p-8'>
          <img className='mb-4' src={logo} alt='ByBike' />
          <form
            className='w-full'
            action='#'
            onSubmit={
              isVerifyShown ? formikVerify.handleSubmit : formik.handleSubmit
            }
          >
            <div className='w-full'>
              <h2 className='text-gray-500 font-semibold'>Phone Number</h2>
              <input
                disabled={isVerifyShown}
                name='phone'
                className={`bg-transparent border-b-2 mb-4 border-[#00a19c] text-gray-500 sm:text-md py-1 text-center focus:placeholder:opacity-0 focus:outline-none block w-full  placeholder-[#4f7775] ${
                  formik.errors.phone && formik.touched.phone
                    ? 'border-red-500 focus:border-red-500'
                    : 'focus:border-[#00a19c] hover:border-[#85d0ce] '
                }}`}
                placeholder='(5**) *** ** **'
                required={true}
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {isVerifyShown && (
              <div className='w-full'>
                <h2 className='text-gray-500 font-semibold'>
                  6 Digit Verification Code via SMS
                </h2>
                <input
                  name='code'
                  className={`bg-transparent border-b-2 mb-4 border-[#00a19c] text-gray-500 sm:text-md py-1 text-center focus:placeholder:opacity-0 focus:outline-none block w-full  placeholder-[#4f7775] ${
                    formikVerify.errors.code && formikVerify.touched.code
                      ? 'border-red-500 focus:border-red-500'
                      : 'focus:border-[#00a19c] hover:border-[#85d0ce] '
                  }}`}
                  placeholder='_ _ _ _ _ _'
                  required={true}
                  value={formikVerify.values.code}
                  onChange={formikVerify.handleChange}
                  onBlur={formikVerify.handleBlur}
                />
              </div>
            )}
            

            {formik.errors.error && (
              <div className='text-red-500 text-sm text-center border-b border-red-500 py-2'>
                {formik.errors.error}
              </div>
            )}

            <button
              type='submit'
              id='submit-text'
              disabled={isVerifyShown ? (formikVerify.isSubmitting || !formikVerify.isValid) : (formik.isSubmitting || !formik.isValid)}
              className='w-full mb-1 text-white bg-[#00a19c] focus:ring-4 focus:outline-none focus:ring-primary-300 px-5 py-2 sm:py-3 text-center transition-all duration-150 ease-in-out hover:scale-105 hover:bg-[#7fd8d5] disabled:bg-[#98b3b2]'
            >
              {isVerifyShown ? 'Verify Code' : 'Login'}
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

export default Login;
