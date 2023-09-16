import React from 'react'
import SectionTitle from './../../../components/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
function Featured() {
  return (
    <div className='featured-item text-white pt-10 bg-fixed'>
       <SectionTitle subHeading="---Check it out---" heading="From Our Menu"></SectionTitle>
       <div className='md:flex justify-center items-center py-20 pt-12 px-36'>
        <div>
            <img  src={featuredImg} alt="" />
        </div>
        <div className='md: ml-10'>
            <p>Aug 20, 2028</p>
            <p className='uppercase'>Where can i get some?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam architecto suscipit expedita a consectetur at harum eum doloribus atque alias?</p>
            <button className=' border-0 border-b-4 mt-4 btn btn-outline'>Order Now</button>
        </div>
       </div>
    </div>
  )
}

export default Featured