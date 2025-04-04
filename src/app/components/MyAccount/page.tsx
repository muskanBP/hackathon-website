'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../header';
import Footer from '../footers';

function Account() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Page Content */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#151875] mb-4">My Account</h1>

          {/* Breadcrumb */}
          <div className="bg-gray-200 py-3 px-6 rounded-md text-sm text-center">
            <span className="text-black">Home</span>
            <span className="text-black mx-2">.</span>
            <span className="text-black">Pages</span>
            <span className="text-black mx-2">.</span>
            <span className="text-[#FB2E86]">My Account</span>
          </div>

          {/* Login Form */}
          <div className="bg-white mt-8 p-8 sm:p-10 md:p-12 rounded-md shadow-md">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151875] mb-4">Login</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg">
              Please login using your account details below.
            </p>

            {/* Form */}
            <form>
              {/* Email Address */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-600 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                />
              </div>

              {/* Forgot Password */}
              <div className="mb-4 text-right">
                <Link href="/forgot-password" className="text-[#FB2E86] hover:underline">
                  Forgot your password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-[#FB2E86] text-white py-2 rounded-md hover:bg-[#F94C9B] transition-colors"
              >
                Sign In
              </button>
            </form>

            {/* Create Account */}
            <div className="text-center mt-6 text-gray-600">
              Don’t have an Account?{' '}
              <Link href="/register" className="text-[#FB2E86] hover:underline">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footers */}
      <Footer />
    </>
  );
}

export default Account;
