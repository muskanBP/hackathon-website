"use client";

import { useState } from 'react';
import Image from 'next/image';

function AccountPage() {
  const [isLogin, setIsLogin] = useState(true); // To toggle between Login and SignUp forms
  const [loginFormData, setLoginFormData] = useState({
    emailOrPhone: '',
    password: '',
  });
  const [signupFormData, setSignupFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
  });
  const [alertMessage, setAlertMessage] = useState('');

  // Handle change for Login form
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle change for SignUp form
  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupFormData({
      ...signupFormData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login form submission
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlertMessage('Welcome to Exclusive! 🎉');
    setLoginFormData({
      emailOrPhone: '',
      password: '',
    });
    setTimeout(() => setAlertMessage(''), 3000); // Hide alert after 3 seconds
  };

  // Handle SignUp form submission
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlertMessage('Account created successfully! 🎉');
    setSignupFormData({
      name: '',
      emailOrPhone: '',
      password: '',
    });
    setTimeout(() => setAlertMessage(''), 3000); // Hide alert after 3 seconds
  };

  return (
    <>
      {/* Header Section */}
      <header className="bg-gray-100 py-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#151875]">My Account</h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100 py-10">
        {/* Left Section (Image) */}
        <div className="w-full sm:w-1/2 flex justify-center items-center p-4">
          <Image
            src={isLogin ? '/images/apple (1).png' : '/images/apple (3).png'}
            alt="Cart"
            width={800}
            height={800}
            className="object-contain"
            priority
          />
        </div>

        {/* Right Section (Form) */}
        <div className="w-full sm:w-1/2 flex justify-center items-center bg-white p-6 sm:p-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2">
              {isLogin ? 'Log in to Exclusive' : 'Create an Account'}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-6">
              {isLogin
                ? 'Enter your details below to log in.'
                : 'Enter your details below to sign up.'}
            </p>

            <form
              onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}
              className="space-y-4"
            >
              {/* Conditional fields based on Login or SignUp */}
              {!isLogin && (
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm sm:text-lg md:text-xl font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={signupFormData.name}
                    onChange={handleSignupChange}
                    id="name"
                    className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-black"
                    required
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="emailOrPhone"
                  className="block text-sm sm:text-lg md:text-xl font-medium text-gray-700"
                >
                  Email or Phone Number
                </label>
                <input
                  type="text"
                  name="emailOrPhone"
                  value={isLogin ? loginFormData.emailOrPhone : signupFormData.emailOrPhone}
                  onChange={isLogin ? handleLoginChange : handleSignupChange}
                  id="emailOrPhone"
                  className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-black"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm sm:text-lg md:text-xl font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={isLogin ? loginFormData.password : signupFormData.password}
                  onChange={isLogin ? handleLoginChange : handleSignupChange}
                  id="password"
                  className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-black"
                  required
                />
              </div>

              {/* Conditional Submit Button Text */}
              <button
                type="submit"
                className="w-full px-6 py-2 bg-pink-500 text-white font-semibold rounded-md hover:bg-red-600"
              >
                {isLogin ? 'Log In' : 'Create an Account'}
              </button>

              {/* Conditionals Secondary Button */}
              {isLogin ? (
                <div className="text-center mt-4 text-gray-600">
                  Don’t have an account?{' '}
                  <button
                    type="button"
                    className="text-[#FB2E86] hover:underline"
                    onClick={() => setIsLogin(false)}
                  >
                    Create an account
                  </button>
                </div>
              ) : (
                <div className="text-center mt-4 text-gray-600">
                  Already have an account?{' '}
                  <button
                    type="button"
                    className="text-[#FB2E86] hover:underline"
                    onClick={() => setIsLogin(true)}
                  >
                    Log in
                  </button>
                </div>
              )}
            </form>

            {/* Alert Message */}
            {alertMessage && (
              <div className="mt-4 text-center text-black">
                <p>{alertMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-sm sm:text-base text-gray-600">&copy; 2024 Exclusive</p>
      </footer>
    </>
  );
}

export default AccountPage;
