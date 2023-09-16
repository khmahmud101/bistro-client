import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../Shared/Cover/Cover'
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu'
import useMenu from '../../../hooks/useMenu'
import SectionTitle from '../../../components/SectionTitle'
import MenuCategory from '../MenuCategory/MenuCategory'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
function Menu() {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
        <Helmet>
            <title>Bistro | Menu</title>
        </Helmet>
       <Cover img={menuImg} title="Our Menu"></Cover>
       <SectionTitle subHeading="Don't Miss" heading="Today's offer"></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        <MenuCategory coverImg={dessertImg} title="dessert" items={desserts}></MenuCategory>
        <MenuCategory coverImg={pizzaImg} title="pizza" items={pizza}></MenuCategory>
        <MenuCategory coverImg={saladImg} title="salad" items={salad}></MenuCategory>
        <MenuCategory coverImg={soupImg} title="soup" items={soup}></MenuCategory>
        </div>
  )
}

export default Menu