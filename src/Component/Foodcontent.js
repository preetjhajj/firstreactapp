import React, { useState } from 'react'
import FoodApi from './FoodApi.js'
import Foodcard from './Foodcard.js'
import Navbar from './Navbar.js'

const uniqueitem = ["All", ...new Set(FoodApi.map((elem) => {
  return elem.category
}))]

const Foodcontent = () => {
  const [MenuData, setMenuData] = useState(FoodApi)
  const [MenuList, setMenuList] = useState(uniqueitem)
  const filteritem = (valofcat) => {
    if(valofcat === "All"){
      return setMenuData(FoodApi)
    }
    const updatedlist = FoodApi.filter((elem) => {
      return elem.category === valofcat
    })
    setMenuData(updatedlist)
  }
  console.log(setMenuList)
  // const AllList =  (all) => {
  //   setMenuData(FoodApi)
  // }
  return (
    <>
      <Navbar filteritem={filteritem} MenuList={MenuList}/>
      <Foodcard MenuData={MenuData} />
    </>
  )
}

export default Foodcontent