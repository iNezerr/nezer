import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children, icon }) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="mr-6 group">
      <div className="flex items-center">
        {icon && <span className={`${active ? "opacity-100" : "opacity-70"} group-hover:opacity-100 transition-opacity duration-200`}>{icon}</span>}
        <p className={`${buttonClasses} font-semibold hover:text-white transition-colors duration-300`}>
          {children}
        </p>
      </div>
      <div className={`h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-1 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-3/4"}`}></div>
    </button>
  );
};

export default TabButton;
