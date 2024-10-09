import Link from 'next/link'
import React from 'react'
import GithubIcon from '../public/images/github.svg'

type Props = {}

const EmailSection = (props: Props) => {
  return (
    <section className=' grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className="z-10">
        <h5 className='text-xl font-bold text-white my-2'>Let's connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'
        >I'm always open to new opportunities and collaborations.
        Feel free to reach out to me.</p>
        <div className="socials flex flex-row gap-2">
          <Link href='github.com' className='text-[#ADB7BE]
           hover:text-white'>
            <i className='fab fa-github'></i>
          </Link>
          <Link href='linkedin.com' className='text-[#ADB7BE]
           hover:text-white'>
            <i className='fab fa-linkedin'></i>
          </Link>
          <Link href='twitter.com' className='text-[#ADB7BE]
           hover:text-white'>
            <i className='fab fa-twitter'></i>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className='mb-6'>
            <label htmlFor="email"
              className='text-white block text-sm mb-2 font-medium'>Your Email</label>
            <input type="email" name="email" id="email"
              className="bg-[#18191E] border-[#33353F]
            placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
            block w-full p-2.5 " />
          </div>
          <div className='mb-6'>
            <label htmlFor="subject"
              className='text-white block text-sm mb-2 font-medium'>Subject</label>
            <input type="text" name="subject" id="subject"
              className="bg-[#18191E] border-[#33353F]
            placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
            block w-full p-2.5 " />
          </div>
          <div className='mb-6'>
            <label htmlFor="message"
              className='text-white block text-sm mb-2 font-medium'>Message</label>
            <textarea name="message" id="message" placeholder="Your message"
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9]
                 text-gray-100 text-sm rounded-lg block w-full p-2.5 h-32" />
          </div>
          <button type="submit" className='bg-purple-500 hover:bg-purple-600
             text-white font-bold py-2.5 px-5 w-full rounded-lg'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection
