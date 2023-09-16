import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle'
import MenuItem from '../../Shared/MenuItem'
import useMenu from '../../../hooks/useMenu'

function PopularMenu() {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
   
   
  return (
    <section className='mb-12'>
        <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
        ></SectionTitle>
        <div className='grid md:grid-cols-2 gap-10'>
            {
                popular.map(item => <MenuItem item={item}></MenuItem>)
            }
        </div>
    </section>
  )
}

export default PopularMenu