import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import { popularProducts } from './data'

const Product = ({ item }) => {
  const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  `

  const Conatiner = styled.div`
    flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
   

    `
  const Circle = styled.div`
   height: 200px;
   width: 200px;
   border-radius: 50%;
   background-color: #f6ebfb;
   position:absolute;
   z-index: 1;
  
`
  const Image = styled.img`
height:55%;
z-index:2;
position: absolute;


  
`

const Icon = styled.div`
width: 40px;
height: 40px;
/* padding: 8px; */
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
z-index: 3;
transition: all 0.5 ease;
&:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);

}

  
`
  const Shopingcartoutlined = styled.div`
  
`
  const SearchOutlined = styled.div`
  
`
  const FavouriteBorderOutlined = styled.div`
  
`
// console.log(item)

  return (
    <Conatiner>
      <Circle />

      <Image src={item.img} />
      <Info>
      <Icon>
        <i className="bi bi-cart"></i>
      </Icon>
      <Icon>
      <Link to={`/products/${item._id}`}>
        <i className="bi bi-search"></i>
      </Link>
      </Icon>
      <Icon>
        <i className="bi bi-heart"></i>
      </Icon>
      </Info>

    </Conatiner>
  )
}

export default Product