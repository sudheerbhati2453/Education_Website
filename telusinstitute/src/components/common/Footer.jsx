/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react"
import logImg from "../assets/images/logo-black.png"
import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <>
      <footer className='bg-[#F3F4F8] py-10 pt-32 -mt-24'>
        <div className='container grid grid-cols-4 gap-5 md:grid-cols-2'>
          <div className='logo'>
            <img src={logImg} alt='logImg' className='h-6' />
            <span className='text-[14px]'>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</span>
          </div>

          <li>
            <h4 className='text-black text-sm font-semibold mb-5'>Company</h4>
            <NavLink to='#' className=' text-[14px] block mb-2 '>
              Contact
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Portfolio
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Blog
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Our team
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Blog
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Get in Touch
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              FAQ
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Latest news
            </NavLink>
          </li>
          <li>
            <h4 className='text-black text-sm font-semibold mb-5'>Platform</h4>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Shop
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Pricing
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Blog
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Landing
            </NavLink>
          </li>
          <li>
            <h4 className='text-black text-sm font-semibold mb-5'>Subscribe</h4>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              About us
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Contact
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Reviews
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Services
            </NavLink>
          </li>
        </div>
      </footer>
      <section>
     <div className="map-container" style={{ width: '100%', height: '450px', overflow: 'hidden' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.7663198358628!2d75.89119969603107!3d31.53057747871332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391afd668f24d407%3A0xfa9ba4877f17c3e2!2sTelus%20Institute%20%7C%20Computer%20Training%20Center%20%7C%20Basic%20Computer%20%7C%20Tally%20%7C%20Advance%20Excel%20%7C%20Spoken%20English%20Course%20in%20Hoshiarpur.!5e0!3m2!1sen!2sin!4v1727327979051!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: '0' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </section> 
      <div className="down text-center">
            <h4 className="animated-text"><span>T</span>elus<span>I</span>
            nstitute</h4>
        </div>
    </>
  )
}
