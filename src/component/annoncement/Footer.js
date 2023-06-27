import React from 'react'
import styled from 'styled-components'


const Logo = styled.h1``
const  Desc= styled.p`  
margin: 20px 0px;  
`
const Container = styled.div`
display: flex;
    
`
const Social = styled.div`
display: flex;
/* justify-content: center; */

`
const Socialicon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
justify-content: center;
align-items: center;
display: flex;
margin-right: 20px;
cursor: pointer;

`
const Left = styled.div`
    flex: 1;
    margin: 10px;
    margin-left: 20px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
    
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
margin-bottom: 30px;
    
`
const List = styled.li`
margin: 0;
padding: 0;
list-style: none;
flex-wrap: wrap;
display: flex;
    
`
const Listitem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
    
`
const ContactItem = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;
    
`
const Payement = styled.img`
height: 40px;
width: 250px;
cursor: pointer;
    
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    Ninganna    
                </Logo>
                <Desc>
                There are variation of passages of lorem avaliable,but the mejority have suffered in larteretion in some form by injecting random humor.

                </Desc>
                <Social>
                    <Socialicon color="3B5999">
                    <i className="bi bi-facebook"></i>
                    </Socialicon>
                    <Socialicon color="E4405F">
                    <i className="bi bi-whatsapp"></i>
                    </Socialicon>
                    <Socialicon color="55ACEE">
                    <i className="bi bi-instagram"></i>
                    </Socialicon>
                    <Socialicon color="E60023">
                    <i className="bi bi-twitter"></i>
                    </Socialicon>

                </Social>
            </Left>
            <Center>
                <Title>
                    Useful Links
                </Title>
                <List>
                <Listitem>Home</Listitem>
                <Listitem>Cart</Listitem>
                <Listitem>Man Fashion</Listitem>
                <Listitem>Women Fashion</Listitem>
                <Listitem>Accessories</Listitem>
                <Listitem>My Account</Listitem>
                <Listitem>Order Tracking</Listitem>
                <Listitem>Wishlist</Listitem>
                <Listitem>Terms</Listitem>
                </List>
            </Center>
            <Right>
            <Title>
                Contact
            </Title>
                <ContactItem>
                <i className="bi bi-geo-alt-fill" style={{margin:"10px"}}></i>
                622 Dixie Path, South Tobinechester 98336

                </ContactItem>
                <ContactItem>
                <i className="bi bi-telephone-inbound" style={{margin:"10px"}}></i>
                    +918669811356
                </ContactItem>
                <ContactItem >
                    <a href='mailto:Ninganna@gmail.com' style={{textDecoration:"none"}}>
                <i className="bi bi-envelope" style={{margin:"10px"}}></i>Ninganna@gmail.com</a>
                </ContactItem>
                <Payement src="https://www.pngmart.com/files/7/Payment-Background-PNG.png"/>
            </Right>
        </Container>
    )
}

export default Footer