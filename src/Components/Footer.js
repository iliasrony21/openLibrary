import React from 'react'
import last from '../images/last logo.png'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className='footer p-10 bg-neutral text-neutral-content '>
        <div className='ml-40'>
          <span className='font-bold  text-blacktext-black'>Open Library</span>
          <a className='link link-hover'>vision</a>
          <a className='link link-hover'>Volunteer</a>
          <a className='link link-hover'>Partner With Us</a>
          <a className='link link-hover'>Careers</a>
          <a className='link link-hover'>Blog</a>
          <a className='link link-hover'>Terms of Service</a>
          <a className='link link-hover'>Donate</a>
        </div>
        <div className=''>
          <span className='font-bold  text-black '>Discover</span>
          <a className='link link-hover'>Home</a>
          <a className='link link-hover'>Books</a>
          <a className='link link-hover'>Authors</a>
          <a className='link link-hover'>Subjects</a>
          <a className='link link-hover'>Collections</a>
          <a className='link link-hover'>Advanced Search</a>
          <a className='link link-hover'>Return to Top</a>
        </div>
        <div className=''>
          <span className='font-bold  text-black'>Develop</span>
          <a className='link link-hover'>Developer Center</a>
          <a className='link link-hover'>API Documentation</a>
          <a className='link link-hover'>Bulk Data Dumps</a>
          <a className='link link-hover'>Writing Bots</a>
          <a className='link link-hover'>Add a Book</a>
        </div>
        <div className=''>
          <span className='font-bold  text-black'>Help</span>
          <a className='link link-hover'>Help Center</a>
          <a className='link link-hover'>Report A Problem</a>
          <a className='link link-hover'>Suggesting Edits</a>
          <div className='flex'>
            <div>
              <FaTwitterSquare className='h-10 w-10 text-black mr-2' />
            </div>
            <div>
              <FaGithubSquare className='h-10 w-10 text-black' />
            </div>
          </div>
        </div>
        <div className=''>
          <span className='font-bold  text-black'>Change Website Language</span>
          <a className='link link-hover'>Čeština (cs)</a>
          <a className='link link-hover'>Deutsch (de)</a>
          <a className='link link-hover'>English (en)</a>
          <a className='link link-hover'>Español (es)</a>
          <a className='link link-hover'>Français (fr)</a>
          <a className='link link-hover'>Hrvatski (hr)</a>
          <a className='link link-hover'>Português (pt)</a>
          <a className='link link-hover'>తెలుగు (te)</a>
          <a className='link link-hover'>Українська (uk)</a>
          <a className='link link-hover'>中文 (zh)</a>
        </div>
      </footer>
      <div className='flex ml-44'>
        <div>
          <img src={last} alt='' />
        </div>
        <div className='text-sm '>
          Open Library is an initiative of the Internet Archive, a 501(c)(3)
          non-profit, building a digital library of Internet sites and other
          cultural artifacts in digital form. <br /> Other projects include the
          Wayback Machine, archive.org and archive-it.org
        </div>
      </div>
    </div>
  )
}

export default Footer
