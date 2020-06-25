import React from 'react';

const Card = ({ className, children }) => (
    <div 
        className={`p-12 border border-solid border-gray-300 ${className}`}
        style={{
            boxShadow: '0 5px 5px rgba(0,0,0,0.2)'
        }}>
        {children}
    </div>
);

export default Card;