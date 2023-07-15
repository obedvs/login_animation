import React, { useState } from 'react';
import './App.css';

const SignUpForm = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form action="#" className="bg-white flex items-center justify-center flex-col px-16 h-full text-center">
          <h1 className='font-bold m-0'>Create Account</h1>
          <div className="my-5">
            <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10"><svg class="h-6 w-6 text-gray-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
            <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10"><svg class="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg></a>
            <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10"><svg class="h-6 w-6 text-gray-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></a>
          </div>
          <span className='text-xs'>or use your email for registration</span>
          <input type="text" placeholder="Name" className="bg-gray-200 border-none py-3 px-4 my-2 w-full"/>
          <input type="email" placeholder="Email" className="bg-gray-200 border-none py-3 px-4 my-2 w-full"/>
          <input type="password" placeholder="Password" className="bg-gray-200 border-none py-3 px-4 my-2 w-full"/>
          <button className='rounded-full border border-[#7FB3D5] bg-[#195775] text-white text-xs font-bold py-3 px-12 tracking-wide uppercase transition-transform ease-in duration-200 mt-4'>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#" className="bg-white flex items-center justify-center flex-col px-16 h-full text-center">
          <h1 className='font-bold m-0'>Sign in</h1>
          <div className="my-5">
            <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10"><svg class="h-6 w-6 text-gray-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
            <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10"><svg class="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg></a>
            <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1 h-10 w-10"><svg class="h-6 w-6 text-gray-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></a>
          </div>
          <span className='text-xs'>or use your account</span>
          <input type="email" placeholder="Email" className="bg-gray-200 border-none py-3 px-4 my-2 w-full"/>
          <input type="password" placeholder="Password" className="bg-gray-200 border-none py-3 px-4 my-2 w-full"/>
          <a href="#" className="text-gray-700 text-sm no-underline my-4">Forgot your password?</a>
          <button className='rounded-full border border-[#7FB3D5] bg-[#195775] text-white text-xs font-bold py-3 px-12 tracking-wide uppercase transition-transform ease-in duration-200'>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className='font-bold m-0'>Welcome Back!</h1>
              <p className='text-sm font-light leading-5 tracking-wide my-5'>To keep connected with us please login with your personal info</p>
              <button className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-12 tracking-wide uppercase transition-transform ease-in duration-200" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className='font-bold m-0'>Hello, Friend!</h1>
              <p className='text-sm font-light leading-5 tracking-wide my-5'>Enter your personal details and start a journey with us</p>
              <button className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-12 tracking-wide uppercase transition-transform ease-in duration-200" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
    </div>
  );
};

const App = () => (
  <>
    <SignUpForm />
  </>
);

export default App;