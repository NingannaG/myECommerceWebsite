import React from 'react'
import styled from 'styled-components'
import { catagary } from './data'
import CategaryItem from './CategaryItem'

const Categary = () => {
    const Container = styled .div`
    display:flex;
    padding:20px; 
    justify-content:space-between;        
    `
  return (

    <Container>
        {
            catagary.map(item=>(
                <CategaryItem item={item}/>
            ))
        }
       
    </Container>
  )
}

export default Categary