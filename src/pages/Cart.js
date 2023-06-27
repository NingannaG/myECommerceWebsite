import React, { useEffect } from 'react'
import Navbar from '../component/navbar/Navbar'
import Annoncement from '../component/annoncement/Annoncement'
import Footer from '../component/annoncement/Footer'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { userRequest } from "./slider/reqestMethod"
import {Link} from "react-router-dom"

const KEY=process.env.REACT_APP_STRIPE
const Container = styled.div``
const Wrapper = styled.div`

`
const Title = styled.h1`
font-weight: 300;
text-align: center;

`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;

`
const TopButton = styled.div`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: 2px solid black;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transferent"};
color: ${props => props.type === "filled" && "white"};

;

`
const TopTexts = styled.div`
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
    
`
const Bottom = styled.div`
display: flex;
/* Width: 100%; */
justify-content: space-between;    
padding: 50px;
`
const Info = styled.div`
flex: 3;
`
const Summary = styled.div`
    flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetails = styled.div`
flex:2;
display: flex;
/* justify-content: end; */

`
const Image = styled.img`
width: 200px;

`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-ar';
`
const ProductName = styled.span`padding:10px 0px;`
const ProductId = styled.span`padding:10px 0px;`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
margin:5px;
background-color: ${props => props.color};

`
const ProductSize = styled.span`
padding:10px 0px;
`
const PriceDetails = styled.div`
flex: 1;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items:center;
margin-bottom: 20px;`

const ProductAmount = styled.div` font-size:24px;
margin: 5px;
font-size: 24px;
`
const ProductPrice = styled.div`
font-size:30px;
font-weight: 200;
`
/* const ProductDetails=styled.div``; */

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor:pointer;
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryItemButton = styled.button`
width:100%
`



const Cart = () => {
    const cart = useSelector(state => state.cart);
    console.log(cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();
    const onToken = (token) => {
        setStripeToken(token);

    }
    console.log(stripeToken);
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                history.push("/success", 
                { stripeData: res.data,
                products:cart });

            } catch (err){
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, history])

    return (
        <Container>
            <Navbar />
            <Annoncement />
            <Wrapper>
                <Title>
                    YOUR BAG
                </Title>
                <Top>
                <Link to="/" style={{textDecoration:"none"}}>
                <TopButton>
                CONTINUE SHOPPING
                </TopButton>
                </Link>
                    <TopTexts>
                        <TopText>
                            Shoppting Bag ({cart.quantity})
                        </TopText>
                        <TopText>
                            Your Wishlist (0)
                        </TopText>
                    </TopTexts>
                    <StripeCheckout
                    name="Ninganna"
                            image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                    >
                    <TopButton type="filled">
                    CHECKOUT NOW
                    </TopButton>
                    </StripeCheckout>
                </Top>
                <Bottom>
                    <Info>
                        {
                            cart.products?.map(product => (

                                <Product>
                                    <ProductDetails>
                                        <Image src={product.img} />
                                        <Details>
                                            <ProductName>
                                                <b>
                                                    Product : </b> {product.title}
                                            </ProductName>
                                            <ProductId>
                                                <b>
                                                    ID: {product._id}
                                                </b>
                                            </ProductId>
                                            <ProductColor color={product.colour} />
                                            <ProductSize>
                                                <b>Size : {product.size}</b>
                                            </ProductSize>

                                        </Details>
                                    </ProductDetails>

                                    <PriceDetails>
                                        <ProductAmountContainer>
                                            <i className="bi bi-plus-lg" ></i>
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                            <i className="bi bi-dash-lg" ></i>
                                        </ProductAmountContainer>
                                        <ProductPrice>
                                            $ {product.price * product.quantity}
                                        </ProductPrice>
                                    </PriceDetails>
                                </Product>

                            ))}
                    </Info>

                    <Summary>
                        <SummaryItem>
                            <SummaryItemText>
                                Subtotal
                            </SummaryItemText>
                            <SummaryItemPrice>
                                $ {cart.total}
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Estimated Shipping
                            </SummaryItemText>
                            <SummaryItemPrice>
                                $ 5.90
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Shipping Discount
                            </SummaryItemText>
                            <SummaryItemPrice>
                                $ 5.90
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">
                                Total
                            </SummaryItemText>
                            <SummaryItemPrice>
                                $ {cart.total}
                            </SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Ninganna"
                            image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>CheckOut Now</Button>
                        </StripeCheckout>
                    </Summary>

                </Bottom>
                <Hr />
            </Wrapper>
            <Footer />s
        </Container>
    )
}

export default Cart;