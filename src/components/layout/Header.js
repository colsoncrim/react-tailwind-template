import React from 'react'
import Button from '../Button'

const Header = () => (

    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center text-2xl">
          <div className="w-12 mr-3">
          {/* logo here */}
          </div>
          Company
        </div>
        <div className="flex mt-4 sm:mt-0">
            <a className="text-indigo-600 hover:indigo-500 px-4" href="#about">
              About
            </a>
            <a className="text-indigo-600 hover:indigo-500 px-4" href="#services">
              Services
            </a>
            <a className="text-indigo-600 hover:indigo-500 px-4" href="#features">
              Features
            </a>
            <a className="text-indigo-600 hover:indigo-500 px-4" href="#pricing">
              Pricing
            </a>
        </div>
        <div className="hidden md:block">
          <Button className="text-md">Request Demo</Button>
        </div>
      </div>
  </header>
)

export default Header