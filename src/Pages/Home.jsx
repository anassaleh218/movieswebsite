import React,{ useState,useEffect,useContext } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { CartContext } from '../context/CartContext';

export default function Home() {

    const [products, setProducts]=useState([])
    const {cart, setCart} = useContext(CartContext)

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