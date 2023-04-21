import React from 'react'
import './Footer.js'
import styled from 'styled-components'

const Container = styled.div`
align-items: center;
color: white;
background-color: teal;
font-size: 16px;
font-weight: 500;
height: 30px;
justify-content: center;
display: flex;
`

const Annoncement = () => {
  return (
    <Container className='annoncement'>Super deal ! Free shipping over order of 50$ </Container>
  )
}

export default Annoncement