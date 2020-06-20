import React from 'react'

const sizes = {
    default: `py-3 px-8`,
    lg: `py-4 px-12`,
    xl: `py-5 px-16 text-lg`
  };
  
  const Button = ({ children, className = '', size }) => {
    return (
      <button
        type="button"
        className={`
          ${sizes[size] || sizes.default}
          ${className}
          text-white 
          bg-indigo-600 
          hover:bg-indigo-500
          rounded
          text-white
      `}
      >
        {children}
      </button>
    );
  };
  
  export default Button;