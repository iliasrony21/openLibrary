import React from 'react'
import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.png'
import banner from '../../images/banner.png'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <div className=''>
      <div className='header1 flex bg-secondary justify-between'>
        <div className='headerpic ml-60 pt-1'>
          <img src={logo1} alt='' />
        </div>
        <div className='second-part flex'>
          <div className=''>
            <button className='btn btn-sm normal-case gap-2 h-5 bg-transparent text-white mr-3 mt-2 mb-2 border-gray-600'>
              Donate
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-red-600 '
                fill='#E8383C'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                />
              </svg>
            </button>
          </div>
          <div>
            <img className='mr-40 pt-1' src={logo2} alt='' />
          </div>
        </div>
      </div>
      {/* header 2 start */}
      <div className='bg-[#E1DCC5]'>
        <div className='header2 '>
          <div className='navbar '>
            <div className='navbar-start'>
              <div className='dropdown'>
                <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h8m-8 6h16'
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className='menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52'
                >
                  <li>
                    <a>My Books</a>
                  </li>
                  <li tabIndex={0}>
                    <a className='justify-between'>
                      Browser
                      <svg
                        className='fill-current'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                      </svg>
                    </a>
                    <ul className='p-2'>
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                </ul>
              </div>
              <a className=' normal-case text-xl ml-32'>
                <img src={banner} alt='' />
              </a>
            </div>
            <div className=' hidden  lg:flex '>
              <ul className='menu menu-horizontal px-1 '>
                <li>
                  <a className='ml-[-160px] '>My Books</a>
                </li>
                <li tabIndex={0} className='z-1'>
                  <a>
                    Browse
                    <svg
                      className='fill-current'
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                    >
                      <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                    </svg>
                  </a>
                  <ul className='p-2 bg-base-100 z-40'>
                    <li>
                      <a>Subjects</a>
                    </li>
                    <li>
                      <a>Trending</a>
                    </li>
                    <li>
                      <a>Library Explore</a>
                    </li>
                    <li>
                      <a>Lists</a>
                    </li>
                    <li>
                      <a>Collection</a>
                    </li>
                    <li>
                      <a>k-12 Student Library</a>
                    </li>
                    <li>
                      <a>Random Book</a>
                    </li>
                    <li>
                      <a>Advance Search</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='navbar-end mr-32'>
              <select className='select select-accent w-12 rounded-r-none max-w-xs ml-20'>
                All
                <option disabled selected className='text-xs'>
                  ALL
                </option>
                <option>Auto</option>
                <option>Dark mode</option>
                <option>Light mode</option>
              </select>
              <div className='flex '>
                <input
                  type='text'
                  placeholder='Search'
                  className='input input-bordered bg-white w-60 max-w-xs rounded-l-none '
                ></input>{' '}
                <span>
                  <BsSearch className='ml-[-40px] mt-4' />
                </span>{' '}
              </div>

              <span className='ml-5'>Log In</span>
              <button className='btn btn-primary btn-sm h-10  text-sm ml-5 '>
                Sign Up{' '}
              </button>
              <button className='btn btn-square btn-ghost'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block w-5 h-5 stroke-current '
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
