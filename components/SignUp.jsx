import React from "react";
import { GoLock } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function SignUp() {
  return (
    <>
      <div className='min-[530px]:px-[3rem]  text-slate-900 h-screen max-w-full flex flex-col py-4  align-middle items-center justify-center'>
        <div className=' w-full lg:w-[65%] overflow-hidden px-[2rem] lg:max-w-[450px]'>
          <div id='#upper-form'>
            <div id='#main-text' className='text-center pb-[1.3rem]'>
              <h1 className='text-2xl font-bold'>Sign up to Porkify</h1>
              <span className='text-gray-700'>
                Got an account already?{" "}
                <span className='text-secondary font-semibold'>Log in</span>.
              </span>
            </div>
            <div id='#sign-up' className='flex  pb-[1.2rem]  font-bold '>
              <button className='flex text-[.9rem] min-[425px]:gap-[5rem] gap-4 py-[.6rem] px-3 w-full items-center justify-items-center border-2 rounded-full border-slate-400'>
                <FcGoogle size={30} />
                continue with google
              </button>
            </div>
            <div id='#sign-up' className='flex  pb-[1.2rem]  font-bold '>
              <button className='flex text-[.9rem] min-[425px]:gap-[5rem] gap-4 py-[.6rem] px-3 w-full items-center justify-items-center border-2 rounded-full border-slate-400'>
                <BiLogoFacebookCircle size={30} className='text-blue-600' />
                continue with facebook
              </button>
            </div>

            <div
              id='#OR'
              className=' flex items-center justify-center pt-[1rem] font-semibold text-slate-500 w-full'
            >
              <span className='border-t-2 border-slate-400  w-full '></span>
              <h1>OR</h1>
              <span className='border-t-2 border-slate-400  w-full '></span>
            </div>
          </div>
          <div id='#downer-form'>
            <form action=''>
              <label className='pt-[1.9rem] flex gap-[2rem] items-center pb-[.8rem] border-b-2 border-b-gray-400 '>
                <BsPersonFill className='text-[1.5rem]' />
                <input
                  type='text'
                  name='user_first_name'
                  placeholder='First name'
                  id='#first-name'
                  className='bg-transparent outline-0'
                />
              </label>
              <label className='pt-[1.9rem] flex gap-[2rem] items-center  pb-[.8rem] border-b-2 border-b-gray-400 '>
                <MdOutlineMarkEmailRead className='text-[1.5rem]' />
                <input
                  type='email'
                  name='user_email'
                  placeholder='Email'
                  id='#email'
                  className='bg-transparent outline-0'
                />
              </label>
              <label className='pt-[1.9rem] flex gap-[2rem] items-center  pb-[.8rem] border-b-2 border-b-gray-400 '>
                <GoLock className='text-[1.5rem]' />
                <input
                  type='password'
                  name='user_password'
                  placeholder='Password'
                  id='#password'
                  className='bg-transparent outline-0'
                />
              </label>
            </form>
            <div id='#submit-button' className='py-[1.3rem]'>
              <button
                type='submit'
                className='w-full flex items-center justify-center py-[.8rem] px-[1rem] font-bold text-gray-50 rounded-full bg-secondary hover:bg-primary hover:text-amber-50'
              >
                Create Account
              </button>
            </div>
            <div className='flex text-[.8rem] items-center justify-center text-center'>
              <p>
                By creating an account, you automatically accept our Terms os
                Service, Privacy Policy and Cookies Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
