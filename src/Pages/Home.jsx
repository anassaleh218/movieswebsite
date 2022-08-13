import { FavlistContext } from '../context/FavlistContext';
import React,{ useState,useEffect,useContext } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';


export default function Home() {

    const {cart, setCart} = useContext(FavlistContext)
    const [products, setProducts]=useState([])
    

    useEffect(() => {
        axios
        .get("https://dummyjson.com/products")
        .then((respons)=>{
            setProducts(respons.data.products);
        })
    },[])

    const handleAdd=(product)=>{
        setCart([...cart,product])
     }

  return (
    
    <>
        <Navbar></Navbar>
    <div>
        {
            !products === 0 && (<div>no data found</div>)
        }
    </div>
    <div>
        {
            products.map((e)=>{
                return(
                    <div key={e.id}>
                        <div>{e.title}</div>
                        <button onClick={()=> handleAdd(e)}>Add</button>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

// https://api.tvmaze.com/shows