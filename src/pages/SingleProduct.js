import React from 'react'
import Navbar from '../component/navbar/Navbar'
import styled from 'styled-components'
import Annoncement from '../component/annoncement/Annoncement'
import Footer from '../component/annoncement/Footer'
import Newsletter from '../component/Newsletter'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { publicRequest } from "../pages/slider/reqestMethod"
import { useDispatch } from 'react-redux'
import { addProduct } from './annoncement/cartRedux'


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
const FilerTitle = styled.span`font-size: 20px;font-weight: 200;`

const FilterColor = styled.div`width: 20px;height: 20px;border-radius:50%;
background-color:${props => props.color};
margin: 0px 5px;
cursor: pointer;`

const FilterSizeOption = styled.option``

const FilterSize = styled.select`margin-left: 15px;padding: 5px;
`
const AddContainer = styled.div`display: flex;width: 50%;align-content:center;
justify-content: space-between;`

const AmountContainer = styled.div`align-items:center;
font-weight: 700;
display: flex;`

const Amont = styled.span`width: 30px;
height: 30px;border-radius:10px;
border:1px solid teal;
align-items:center;
justify-content: center;
margin: 0px 5px;
display: flex;
margin: 10px;
font-weight: 700;
`

const Butoon = styled.button`
padding: 10px;border:1px solid teal;
background-color: white;
cursor: pointer;
margin-left: 10px;
`
const SingleProduct = () => {
   const location = useLocation();
   const id = location.pathname.split("/")[2];
   const [product, setProduct] = useState({});
   const [quantity, setQuantity] = useState(1);
   const [colour,setColour]=useState("");
   const [size,setSize]=useState("");
   const dispatch=useDispatch();
   useEffect(() => {
      const getProduct = async () => {
         try {
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);
            /* console.log(res.data.color) */

         }
         catch { }

      }
      getProduct();
   }, [id]);
   /* console.log(product.color) */

   const handlieClick=(type)=>{
      if(type==="incr"){
         setQuantity(quantity+1);
      }
      else{
         setQuantity(quantity-1);
      }
   }
   const handleClickCart=()=>{
      //cart function
      dispatch(addProduct({...product,quantity,colour,size}));
   }



   return (

      <Container>
         <Navbar />
         <Annoncement></Annoncement>


         <Wrapper>
            <ImgContainer>
               <Image src={product.img}></Image>
            </ImgContainer>
            <InfoContainer>
               <Title>
                  {product.title}
               </Title>
               <Desc>
                  {product.desc}
               </Desc>
               <Price>$ {product.price}</Price>
               <FilterContainer>
                  <Filter>
                     <FilerTitle>
                        Color
                     </FilerTitle>
                     {
                        product.color?.map((c) => (
                           <FilterColor color={c} key={c} onClick={()=>setColour(c)}/>
                        ))
                     }



                     <FilerTitle>
                        Size
                     </FilerTitle>
                     <FilterSize onChange={(e)=>setSize(e.target.value)}>
                        {
                           product.size?.map((c) => (

                              <FilterSizeOption key={c}>{c}</FilterSizeOption>
                           ))
                        }
                     </FilterSize>
                  </Filter>
               </FilterContainer>
               <AddContainer>
                  <AmountContainer>
                     <span style={{ fontWeight: "300", cursor: "pointer", fontSize: "30px" }} onClick={()=>handlieClick("incr")}>+</span>
                     <Amont>{quantity}</Amont>
                     <span style={{ fontWeight: "300", cursor: "pointer", fontSize: "40px" }} onClick={()=>handlieClick("desc")}>-</span>
                  </AmountContainer>
                  <Butoon onClick={handleClickCart}>Add To Cart</Butoon>
               </AddContainer>
            </InfoContainer>
         </Wrapper>
         <Newsletter>
         </Newsletter>
         <Footer />
      </Container >
   )
}

export default SingleProduct