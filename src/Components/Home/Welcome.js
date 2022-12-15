import React, { useEffect, useState } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Welcome = () => {
  const [welcomes, setWelcomes] = useState([])
  useEffect(() => {
    fetch('welcome.json')
      .then(res => res.json())
      .then(data => setWelcomes(data))
  }, [])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  return (
    <div>
      <div className='w-4/5 ml-40 pr-20 pl-10 bg-white pt-5 text-black '>
        <h1 className='text-2xl mb-5 text-primary'>Welcome to Open Library</h1>
        <Slider {...settings}>
          {welcomes.map(welcome => (
            <>
              <div className='card card-side   mb-5 mr-2 bg-[#FCFBF7]'>
                <figure>
                  <img className='h-20' src={welcome.img} alt='Movie' />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>New movie is released!</h2>
                  <p>Click the button to watch on Jetflix app.</p>
                  <div className='card-actions justify-end'></div>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Welcome
