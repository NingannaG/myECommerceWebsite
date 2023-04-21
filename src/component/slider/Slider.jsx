import React, { useEffect, useState } from 'react'
import './slider.css'
import styled from 'styled-components'
import { slideritem } from './data'

const Slider = () => {


  const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  z-index:2;
  `
  const Arrow = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  top:0;
  margin:auto;
  align-items: center;
  justify-content: center;
  left : ${props => props.direction === "left" && "10px"};
  right : ${props => props.direction === "right" && "10px"};
  `
  const Wrapper = styled.div`
  height: 100%;
  display: flex;
  // transform:translateX(${props=>props.slideIndex *100}vw);  
  transform: translateX(${props=>props.slideIndex * -100}vw); 
  // trans
  `
  const Slide = styled.div`
  width: 100vw;
  align-items: center;
  display: flex;
  height: 100vh;
  background-color: rgb(248, 237, 237)
  `
  const ImageContainer = styled.div`
   height: 100%;
   flex: 1;
   justify-content: center;
   align-items: center;
   `
  const InfoContainer = styled.div`
   flex: 1;
   padding: 50px;
   `
  const Image = styled.img`
   margin: 50px;
   height: 80%;
   align-items: center;
   `
  const Title = styled.h1`
   font-size: 70px;
   `
  const Description = styled.p`
   margin: 50px 0px;
   font-style: 20px;
   font-weight: 500;
   letter-spacing: 3px;
   `
  const Button = styled.button`
   padding: 10px;
   font-style: 20px;
   background-color: transparent;
   cursor: pointer;
   border: 1px solid gray;
   display: inline-block;
   `
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick =(direction)=>{
    if(direction==="left"){
      setSlideIndex(slideIndex>0?slideIndex-1:2);
      console.log("clicked")
    }
    else{
      setSlideIndex(slideIndex<2?slideIndex+1:0)
      console.log("clicked")
    }
    console.log("first")

  }

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <i class="bi bi-arrow-left"></i>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {
          slideritem.map((item) => (
            <Slide key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Button>Show More</Button>
              </InfoContainer>
            </Slide>
          ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <i class="bi bi-arrow-right"></i>
      </Arrow>

    </Container>
  )
}

export default Slider