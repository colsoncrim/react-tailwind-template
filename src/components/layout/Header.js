import React from 'react'

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
        <a className="text-purple-700 hover:purple-900 px-4" href="#about">
          About
        </a>
        <a className="text-purple-700 hover:purple-900 px-4" href="#services">
          Services
        </a>
        <a className="text-purple-700 hover:purple-900 px-4" href="#features">
          Features
        </a>
        <a className="text-purple-700 hover:purple-900 px-4" href="#pricing">
          Pricing
        </a>
      </div>
      <div className="hidden md:block">
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-purple-700 border-purple-700 hover:border-transparent hover:text-white hover:bg-purple-700 mt-4 lg:mt-0">Download</a>
      </div>
    </div>
  </header>
)

export default Header