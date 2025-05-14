import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer border-t border-[#222] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} 
              <Link href="https://github.com/Praizee" className="hover:text-[#38bdf8] ml-1" target="_blank" rel="noopener noreferrer">
                Stephen Adeniji
              </Link>
              . All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Link href="https://github.com/Praizee" target="_blank" rel="noopener noreferrer">
              <Image src="/github-icon.svg" width={20} height={20} alt="GitHub" />
            </Link>
            <Link href="https://www.linkedin.com/in/stephen-adeniji/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin-icon.svg" width={20} height={20} alt="LinkedIn" />
            </Link>
            <Link href="https://x.com/steve_ade1407" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" fill="white"/>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/steve_ade14/" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="white"/>
              </svg>
            </Link>
          </div>
          
          <div className="flex items-center text-sm text-white/80">
            <span>Built with</span>
            <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#38bdf8" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span>and lots of coffee</span>
          </div>
        </div>

        <div className="mt-6 border-t border-[#222] pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-lg font-bold mb-4 md:mb-0">Additional Links</h3>
            <div className="flex space-x-4 text-sm text-white/80">
              <Link href="/" className="hover:text-[#38bdf8]">Home</Link>
              <Link href="/projects" className="hover:text-[#38bdf8]">Projects</Link>
              <Link href="/contact" className="hover:text-[#38bdf8]">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
