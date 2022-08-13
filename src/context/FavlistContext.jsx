import React, {createContext,useState} from 'react'

export const FavlistContext=createContext();


export default function FavlistProvider(props) {
    const [list, setList]= useState([]);
  return (

    <FavlistContext.Provider value={{list, setList}}>
        {props.children}
    </FavlistContext.Provider>
    
  )
}
