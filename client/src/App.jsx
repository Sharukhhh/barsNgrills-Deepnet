import React, { useEffect, useState } from 'react'
import Navbar from './components/navigation/Navbar'
import Hero from './components/Hero'
import Options from './components/Options'
import Footer from './components/footer/Footer'
import MenuCard from './components/cards/MenuCard'
import { getCoctails, getDrinks, getFlavours } from './api/calls'
import Info from './components/Info'
import cocktail from '../public/cocktail.png'
import lemonade from '../public/lemonade.png'
import juice from '../public/juice.png'


const App = () => {

  const [drinksMenu , setDrinksMenu] = useState([]);
  const [cocktailMenu , setCockTailMenu] = useState([]);
  const [hookahFlavours, setHookhFlavours] = useState([])

  useEffect(() => {
    
    const DrinksData = async() => {
      const response = await getDrinks();
      setDrinksMenu(response.drinks);
    }

    const CoctailsData = async () => {
      const response = await  getCoctails();
      setCockTailMenu(response.cocktails);
    }

    const flavoursData = async () => {
      const response = await getFlavours();
      setHookhFlavours(response.flavours);
    }

    DrinksData();
    CoctailsData();
    flavoursData();
  },[]);


  return (
    <>
      <Navbar/>
      <Hero/>
      <Options/>

      <MenuCard 
        title={'DRINKS'} 
        isDetailedMenu={true}
        datas={drinksMenu}
        image1={lemonade}
        image2={juice}
      />

      <MenuCard 
        title={'BRUNCH COCKTAILS'} 
        isDetailedMenu={true}
        datas={cocktailMenu}
        image1={juice}
        image2={cocktail}
      />

      <MenuCard 
        title={'HOOKAH FLAVOURS'} 
        isDetailedMenu={false}
        datas={hookahFlavours}
        image1={cocktail}
        image2={lemonade}
      />

      <Info/>
      <Footer/>
    </>
  )
}

export default App