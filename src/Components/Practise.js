import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Practise = ({ name }) => {
  const [cards, setCards] = useState([])
  useEffect(() => {
    fetch('trendingBooks.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, [])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6
  }

  return (
    <div>
      <h1 className='underline text-2xl bg-white w-4/5 ml-40 pl-10 pb-2 text-primary pt-10'>
        {name}
      </h1>
      <div className='w-4/5 ml-40 pr-20 pl-10 bg-[#e2e0dd] pt-10 text-primary'>
        <Slider {...settings}>
          {cards.map(card => (
            <>
              <div className='cards  pl-[-10px] pr-5 shadow-lg'>
                <div className=''>
                  <div className=''>
                    <img className='h-52 w-60' src={card.img} alt='' />
                    <button className='btn bg-primary text-white w-40 ml-1 rounded-lg h-5 mt-5 mb-5 text-xs font-bold bg-bgClass'>
                      {card.buttonName}
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Practise
