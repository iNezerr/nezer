"use client";
import React, { useState, FormEvent } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { EnvelopeIcon, HeartIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log("Form data:", formData);
    const data = {
      from: {
        email: "no-reply@trial-3zxk54v220pljy6v.mlsender.net", // Your verified domain
        name: "myCodeEdge", // Company name
      },
      to: [
        {
          email: "nezerabsolute@gmail.com", // Your email
          name: "Ebenezer Agbekeye", // Recipient name
        },
      ],
      subject: formData.get("subject") as string, // Email subject
      text: formData.get("message") as string, // Email message
    };

    const endpoint = "https://api.mailersend.com/v1/email"; // MailerSend API endpoint

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.API_KEY}`, // Your API key
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.ok) {
        console.log("Message sent successfully.");
        setEmailSubmitted(true);
      } else {
        console.error("Error sending message:", resData.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20"
    >
      <div className="absolute inset-0 bg-[url('/images/stars.png')] bg-repeat opacity-5"></div>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-16 rounded-full"></div>
      
      <div className="relative grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 mb-4">Let's Write Our Story Together</h2>
          <p className="text-[#ADB7BE] mb-6">
            Beyond just building software, I believe in building relationships. Whether you have a project in mind, 
            need guidance, or simply want to connect—I'm here with open ears and an open heart.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-[#181818] rounded-full">
                <HeartIcon className="h-6 w-6 text-pink-400" />
              </div>
              <div>
                <h4 className="text-white font-medium">Meaningful Collaborations</h4>
                <p className="text-[#ADB7BE] text-sm">Let's work on something that matters—projects with purpose and potential for positive impact.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-[#181818] rounded-full">
                <AcademicCapIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-medium">Guidance & Mentorship</h4>
                <p className="text-[#ADB7BE] text-sm">I'm passionate about helping others grow. If you're on your coding journey, I'd love to help.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-[#181818] rounded-full">
                <UserGroupIcon className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-white font-medium">Community Connection</h4>
                <p className="text-[#ADB7BE] text-sm">I believe in the power of community. Let's connect and see how we can grow together.</p>
              </div>
            </div>
          </div>
          
          <div className="socials flex flex-row gap-4">
            <Link 
              href="https://github.com/iNezerr"
              className="transform transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={GithubIcon} alt="Github Icon" className="hover:opacity-80" />
            </Link>
            <Link 
              href="https://linkedin.com/in/ebenezer-agbekeye"
              className="transform transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={LinkedinIcon} alt="Linkedin Icon" className="hover:opacity-80" />
            </Link>
          </div>
        </div>
        
        <div className="bg-[#181818] p-8 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300">
          {emailSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="mb-4 p-3 bg-green-500/10 rounded-full">
                <HeartIcon className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Thank you for reaching out!</h3>
              <p className="text-[#ADB7BE] mb-6">I truly appreciate you taking the time to connect. I'll get back to you as soon as possible.</p>
              <p className="text-white font-medium">"Great conversations start with a simple hello."</p>
            </div>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <EnvelopeIcon className="h-6 w-6 mr-2 text-purple-400" />
                Send a Message
              </h3>
              
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 transition-colors duration-300"
                  placeholder="hello@example.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 transition-colors duration-300"
                  placeholder="Let's create something amazing together"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 transition-colors duration-300"
                  placeholder="I'd love to hear from you. Share your thoughts, ideas, or just say hello!"
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium py-3 px-5 rounded-lg w-full transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center"
              >
                <HeartIcon className="h-5 w-5 mr-2" />
                Send Message
              </button>
              <p className="text-[#ADB7BE] text-xs text-center mt-4">
                Every message matters to me. I personally read and respond to each one.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
