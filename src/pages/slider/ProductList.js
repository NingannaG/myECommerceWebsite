import React from 'react'
import Navbar from '../navbar/Navbar'
import styled from 'styled-components'
import Annoncement from '../annoncement/Annoncement'
import Footer from '../annoncement/Footer'
import Newsletter from './Newsletter'


const Container = styled.div`
`
const Title = styled.h1`
   margin: 20px;
   font-weight: 200;
   `
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const InfoContainer = styled.div`flex: 1;`

const Image = styled.img`width: 100%;
height: 90vh;
`
const ImgContainer = styled.div`flex: 1;padding: 0px 50px ;`

const Desc = styled.p`margin: 20px 0px;`

const Price = styled.span`font-weight: 100;
font-size:40px`

const FilterContainer = styled.div`
display: flex;
width: 50%;margin: 30px 0px;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
display: flex;
align-items: center;
`
const FilerTitle=styled.span`font-size: 20px;font-weight: 200;`

const FilterColor=styled.div`width: 20px;height: 20px;border-radius:50%;
background-color:${props=>props.color};
margin: 0px 5px;
cursor: pointer;`

const FilterSizeOption=styled.option``

const FilterSize=styled.select`margin-left: 15px;padding: 5px;
`
const AddContainer=styled.div`display: flex;width: 50%;align-content:center;
justify-content: space-between;`

const AmountContainer=styled.div`align-items:center;
font-weight: 700;
display: flex;`

const Amont=styled.span`width: 30px;
height: 30px;border-radius:10px;
border:1px solid teal;
align-items:center;
justify-content: center;
margin: 0px 5px;
display: flex;
margin: 10px;
font-weight: 700;
`

const Butoon=styled.button`
padding: 10px;border:1px solid teal;
background-color: white;
cursor: pointer;
margin-left: 10px;
`

const ProductList = () => {
   return (
      <Container>
         <Navbar />
         <Annoncement></Annoncement>
         <Wrapper>
            <ImgContainer>
               <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rW3JbXcT5WvCp-_-ZmCbkez-BbJyJ8QQtwJJUjLRTw&s'></Image></ImgContainer>
            <InfoContainer>
               <Title>
                  Denium JumpSuit
               </Title>
               <Desc>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               </Desc>
               <Price>$ 20</Price>
               <FilterContainer>
                  <Filter>
                     <FilerTitle>
                        Color
                     </FilerTitle>
                     <FilterColor color="black" />
                     <FilterColor color="darkblue" />
                     <FilterColor color="gray" />
                  </Filter>
                  <Filter>
                  <FilerTitle>
                        Size
                     </FilerTitle>
                     <FilterSize>
                     <FilterSizeOption>XS</FilterSizeOption>
                     <FilterSizeOption>S</FilterSizeOption>
                     <FilterSizeOption>M</FilterSizeOption>
                     <FilterSizeOption>L</FilterSizeOption>
                     <FilterSizeOption>XL</FilterSizeOption>
                     <FilterSizeOption>XXL</FilterSizeOption>
                     </FilterSize>
                  </Filter>
                  </FilterContainer>
                  <AddContainer>
                  <AmountContainer>
                  <i className="bi bi-plus-lg" style={{cursor:"pointer"}}></i>
                  <Amont>1</Amont>
                  <i className="bi bi-dash-lg" style={{cursor:"pointer"}}></i>
                  </AmountContainer>
                  <Butoon>Add To Cart</Butoon>
                  </AddContainer>
            </InfoContainer>
         </Wrapper>
         <Newsletter>
         </Newsletter>
         <Footer />
      </Container>
   )
}

export default ProductList