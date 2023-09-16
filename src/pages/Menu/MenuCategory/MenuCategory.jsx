import React from 'react'
import MenuItem from '../../Shared/MenuItem'
import Cover from '../../Shared/Cover/Cover'
import { Link } from 'react-router-dom'

function MenuCategory({items, title, coverImg}) {
  return (
    <div className='pt-8'>
        {title && <Cover img={coverImg} title={title}></Cover>}
         <div className='grid md:grid-cols-2 gap-10 mt-16'>
            {
                items.map(item => <MenuItem item={item}></MenuItem>)
            }
        </div>
        <Link to={`/order/${title}`}><button className=' border-0 border-b-4 mt-4 btn btn-outline'>Order Now</button></Link>
    </div>
  )
}

export default MenuCategory