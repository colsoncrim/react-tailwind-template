import React from 'react'

const Button = ({ children }) => (
    <button className="py-4 px-4 bg-green-600 hover:bg-green-700 rounded text-white">
        {children}
    </button>
)

export default Button