import React, {createContext,useState} from 'react'

export const FavlistContext=createContext();


export default function FavlistProvider(props) {
    const [cart, setCart]= useState([]);
  return (
    <FavlistContext.Provider value={{cart, setCart}}>
        {props.childeren}
    </FavlistContext.Provider>
  )
}
