"use client";
import React, { useState, FormEvent } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        console.log("Message sent successfully.");
        setEmailSubmitted(true);
      } else {
        console.error("Error sending message");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-bold mb-8 font-mono">Get In Touch</h2>
      <p className="text-white/80 mb-10">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-6">Contact Information</h3>
          <p className="text-white/80 mb-8">
            Feel free to reach out through any of the following channels. I'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-6 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-2">Email</h4>
              <a href="mailto:stephenadeniji150@gmail.com" className="text-[#38bdf8] hover:underline">
                stephenadeniji150@gmail.com
              </a>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-2">Phone</h4>
              <a href="tel:+2349028923853" className="text-white/80 hover:text-white">
                (+234) 902 892 3853
              </a>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-2">Location</h4>
              <p className="text-white/80">
                Lagos, NG
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-2">Connect With Me</h4>
              <div className="flex space-x-4">
                <Link 
                  href="https://github.com/Praizee" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38bdf8] transition-colors"
                >
                  <Image src={GithubIcon} alt="GitHub" width={24} height={24} />
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/stephen-adeniji/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38bdf8] transition-colors"
                >
                  <Image src={LinkedinIcon} alt="LinkedIn" width={24} height={24} />
                </Link>
                <Link 
                  href="https://x.com/steve_ade1407" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38bdf8] transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" fill="white"/>
                  </svg>
                </Link>
                <Link 
                  href="https://www.instagram.com/steve_ade14/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38bdf8] transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="white"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          {emailSubmitted ? (
            <div className="text-center py-12">
              <div className="mb-4 inline-block p-3 border border-green-400 rounded-full">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
              <p className="text-white/80">Your message has been sent successfully.</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="bg-transparent border border-[#333] p-3 text-white focus:border-[#38bdf8] outline-none transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-transparent border border-[#333] p-3 text-white focus:border-[#38bdf8] outline-none transition-all"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-transparent border border-[#333] p-3 text-white focus:border-[#38bdf8] outline-none transition-all"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="bg-transparent border border-[#333] p-3 text-white focus:border-[#38bdf8] outline-none transition-all"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-block bg-transparent border border-[#38bdf8] text-white px-6 py-3 hover:bg-[#38bdf8]/10 transition-all"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
