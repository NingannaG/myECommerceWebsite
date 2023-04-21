import React from 'react'
import styled from 'styled-components'
import { catagary, popularProducts } from './data'
import Product from './Product'

const Products = () => {
    const img = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    const Conatiner = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
        
    `
    return (
        <Conatiner>
            {
                popularProducts.map((item) => (
                    <Product key={item.id} item={item} />
                ))}
        </Conatiner>


    )
}

export default Products