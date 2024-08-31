import React from 'react'

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;  // Updated the type to be a function without a return value
  children: React.ReactNode;
}

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active
    ? 'text-white border-b border-purple-500'
    : 'text-[#ADB7BE]';

  return (
    <button onClick={selectTab}>  {/* Corrected the onClick handler */}
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}

export default TabButton;
