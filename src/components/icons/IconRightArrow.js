import React from 'react';

const IconRightArrow = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className={className}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M13 5l7 7-7 7M5 5l7 7-7 7'
      />
    </svg>
  );
};

export default IconRightArrow;
