import React from "react";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/solid";

const Footer: React.FC = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 mb-2">
            EBEN.
          </Link>
          <p className="text-[#ADB7BE] text-sm">Creating with purpose, coding with compassion.</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <p className="text-white mr-2">Built with</p>
            <HeartIcon className="h-4 w-4 text-pink-500" />
          </div>
          <p className="text-[#ADB7BE] text-xs italic">"For we are God's handiwork, created to do good works." - Ephesians 2:10</p>
        </div>
        
        <div className="text-slate-400 text-sm mt-4 md:mt-0">
          <p>© {new Date().getFullYear()} Ebenezer Agbekeye.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
