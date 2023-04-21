import React from 'react'
import styled from 'styled-components'

const CategaryItem = ({item}) => {
    const Container = styled.div`
    display: flex;
    width: 100%;
    margin: 3px;
    height: 70vh;
    position: relative;
        
    `
    const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `
    const Image = styled.img`
    width:100%;
    hight:100%;
    object-fit:cover;
    `
    const Title = styled.h4`
    color: white;
   margin-bottom: 20px;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
`
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>
                {item.title}
            </Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategaryItem