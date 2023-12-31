import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
function Testimonial() {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
  return (
    <section>
        <SectionTitle subHeading="---what our client say" heading="Testimonials"></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review =><SwiperSlide key={review._id}>
                <div className='my-16 mx-24 flex flex-col items-center'>
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                    <p className='py-8'>{review.details}</p>
                    <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                </div>
                </SwiperSlide>)
            }
       
      </Swiper>
    </section>
  )
}

export default Testimonial