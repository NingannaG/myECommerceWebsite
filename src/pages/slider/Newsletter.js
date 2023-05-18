import React from 'react'
import styled, { css } from 'styled-components'

const Newsletter = () => {
    const Container = styled.div`height: 60vh;
    background-color:#fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `
    const Title = styled.h1`
    font-size: 70px;        
    `
    const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;        
    `
    const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;        
    `
    const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;       
    `
    const Button = styled.button`
    flex: 1;
    bottom: none;        
    `
    const I = styled.i`
    height: 100%;
    border: 1px solid red;
    font-size: large;  
    width: 50px;
    cursor: pointer;    
    `
    return (
        <Container>
            <Title>
                Newsletter
            </Title>
            <Description>
                Get timely update from you favarite products.
            </Description>
            <InputContainer>
                <Input placeholder='Your Email'>
                </Input>
                <I>
                <i className="bi bi-arrow-right-square-fill ib" style={{display:"inline-block",color:"red",height:"100px",width:"25px",margin:"10px"}}></i>
                </I>
            </InputContainer>
        </Container>
    )
}

export default Newsletter