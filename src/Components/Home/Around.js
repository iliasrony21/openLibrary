import React from 'react'
import one from '../../images/1.png'
import two from '../../images/2.png'
import three from '../../images/3.png'
import four from '../../images/4.png'
import five from '../../images/5.png'

const Around = () => {
  return (
    <div className='pt-10 pb-10 pl-10 bg-white w-4/5 ml-40'>
      <div className='pb-10'>
        <span className='text-3xl  pb-10 font-bold text-gray-500'>
          Around the Library
        </span>
        <span className='text-sm'>
          {' '}
          Here's what's happened over the last 28 days. More recent changes.
        </span>
      </div>
      <div className='flex'>
        <div>
          <img className='mt-[-5px]' src={one} alt='' />
          <p className='font-bold ml-2'>4,060,663</p>
          <p className='text-sm ml-2'>UNIQUE VISITORS</p>
        </div>
        <div>
          <img className='mt-1' src={two} alt='' />
          <p className='font-bold ml-4'>205,080</p>
          <p className='text-sm ml-4'>NEW MEMBERS</p>
        </div>
        <div>
          <img src={three} alt='' />
          <p className='font-bold ml-2'>1,703,110</p>
          <p className='text-sm ml-2'>CATALOG EDIT</p>
        </div>
        <div>
          <img src={four} alt='' />
          <p className='font-bold ml-3'>1,436</p>
          <p className='text-sm ml-3'>LISTS CREATED</p>
        </div>
        <div>
          <img src={five} alt='' />
          <p className='font-bold ml-4'>450,416</p>
          <p className='text-sm ml-4'>EBOOKS BORROWED</p>
        </div>
      </div>
      <div className='flex '>
        <div>
          <h1 className='text-3xl font-bold text-gray-500 mt-10 mb-5'>
            About the Project
          </h1>
          <p>
            Open Library is an open, editable library catalog, <br /> building
            towards a web page for every book ever <br /> published. More
          </p>
          <p className='text-xs'>
            Just like Wikipedia, you can contribute new information or
            corrections to the catalog. <br /> You can browse by subjects,
            authors or lists members have created. If you love books,
            <br /> why not help build a library?
          </p>
        </div>
        <div className='ml-10'>
          <h1 className='mt-20 pt-4 text-primary font-bold underline mb-3 text-xl'>
            Latest Blog Posts
          </h1>
          <p className='text-primary underline text-sm mb-2'>
            2022 Review - November 23, 2022
          </p>
          <p className='text-primary underline text-sm mb-2'>
            Search for Books in your Reading Log - November 23, 2022
          </p>
          <p className='text-primary underline text-sm'>
            Improvements to the Main Navigation - November 22, 2022
          </p>
        </div>
      </div>
    </div>
  )
}

export default Around
