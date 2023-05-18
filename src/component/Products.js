import React from 'react'
import styled from 'styled-components'
import { catagary, popularProducts } from './data'
import Product from './Product'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Products = ({ cat, filters, sort }) => {
    const img = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    const Conatiner = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
`
    // console.log(cat)
    const [products, setProducts] = useState([]);
    const [filteredProduct, setFilteredeProduct] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get(cat 
                ? `http://localhost:5000/api/products?categories=${cat}`
                : `http://localhost:5000/api/products/` );
            setProducts(res.data);
            // console.log(res.data)
          } catch (err) {}
        };
        getProducts();
      }, [cat]);
      useEffect(()=>{
        cat &&
        setFilteredeProduct(
            products.filter((item)=>
            Object.entries(filters).every(([key,value])=>
            item[key].includes(value)
            )
        )
        )

      },[products,cat,filters])
      useEffect(()=>{
        if(sort==="newest"){
            setFilteredeProduct((pre)=>[...pre].sort((a,b)=>a.createdAt-b.createdAt));
        }
        else if(sort==="asc"){
            setFilteredeProduct((pre)=>[...pre].sort((a,b)=>a.price-b.price))
        }
        else{
            setFilteredeProduct((pre)=>
                [...pre].sort((a,b)=>b.price-a.price))

        }
      },[sort])



    //   const getf=async ()=>{
    //     const response = await fetch("http://localhost:5000/api/products");
    //     const jsonData = await response.json();
    //     setProducts(jsonData);
    //     console.log(Products)
    //   }
    //   getf();
      

    return (
        <Conatiner>
            {cat ? filteredProduct.map((item) => (
                    <Product key={item.id} item={item} />
                ))
                :  products.slice(0,8).map((item) => (
                    <Product key={item.id} item={item} />
                ))
                }
        </Conatiner>


    )
}

export default Products