import {
  ProductBox,
  RowImgs,
  ProductViewBox,
  ProductDisecriptionBox,
  CircleColor,
  SizeField,
  CountBtn
} from "./products.style";
import {
  Typography,
  FlexRow,
  ProductImg,
  Counter,
  SpinnerContainer
} from "../../../Global.style";
import Button from "../../../components/button/button";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useDispatch } from "react-redux";
import { AddCartItem } from "../../../redux/Cart/cartAction";
import {useState} from 'react'
function ProductSection({product}) {
  const[count, setCount]= useState(1)
  const dispatch= useDispatch()
  return ( product?.isLoading? <SpinnerContainer/>:(
   
      <ProductBox>
      <ProductViewBox>
        <ProductImg src={"https://proshop-ms.herokuapp.com/" + product?.product?.image} width={"501px"} />
        <RowImgs>
          <ProductImg style={{cursor: "pointer"}} src={"https://proshop-ms.herokuapp.com/" + product?.product?.image} width={"142px"} />
          <ProductImg style={{cursor: "pointer"}} src={"https://proshop-ms.herokuapp.com/" + product?.product?.image} width={"142px"} />
          <ProductImg style={{cursor: "pointer"}}src={"https://proshop-ms.herokuapp.com/" +product?.product?.image} width={"142px"} />
        </RowImgs>
      </ProductViewBox>
      <ProductDisecriptionBox>
        <FlexRow>
          <Typography fontSize={30} color={"#242424"}>
           {product?.product?.name}
          </Typography>
          <Typography fontSize={32} color={"#242424"}>
           $ {product?.product?.price}
          </Typography>
        </FlexRow>
        <Counter>
          <CountBtn onClick={()=>{if(count>1){setCount(count-1)}}} style={{ cursor: "pointer" }}  fontSize={30}>
            ــ
          </CountBtn>
          <Typography fontSize={30}> {count}</Typography>
          <CountBtn onClick={()=>{if(count<product.product.countInStock){setCount(count+1)}}}  style={{ cursor: "pointer" }} fontSize={30}>
            +
          </CountBtn>
        </Counter>
        <FlexRow style={{ justifyContent: "flex-start" }}>
          <Typography color={"#707070"} fontSize={24}>
            Color:{" "}
          </Typography>
          <Typography fontSize={24} color={"#242424"}>
            Silver
          </Typography>
        </FlexRow>
        <FlexRow style={{ justifyContent: "flex-start" }}>
          <CircleColor color={"#FED6BC"}></CircleColor>
          <CircleColor color={"#EDEAE3"}></CircleColor>
          <CircleColor color={"#6B7B73"}></CircleColor>
        </FlexRow>
        <FlexRow style={{ justifyContent: "flex-start" }}>
          <Typography color={"#707070"} fontSize={24}>
            Size:{" "}
          </Typography>
          <Typography fontSize={24} color={"#242424"}>
            256GB
          </Typography>
        </FlexRow>
        <FlexRow>
          <SizeField>64GB</SizeField>
          <SizeField style={{ background: "#000", color: "#fff" }}>
            256GB
          </SizeField>
          <SizeField>512GB</SizeField>
          <FlexRow style={{ justifyContent: "flex-end" }}>
              <Button
                style={{border: "1px solid #FCDD06", marginRight:"1rem"}}
                width={"54px"}
                text={<BookmarkIcon></BookmarkIcon>}
                isGray={true}
                
                />
          
               <Button link={'/cart'}  text={"Add to cart"} handleClick={()=>{
            if(product.product.countInStock){
              dispatch(AddCartItem(product.product,count))
            }
          }}/>
          </FlexRow>
          
        </FlexRow>
        <Typography fontSize={16}>
          {product?.product?.description}
        </Typography>
      </ProductDisecriptionBox>
    </ProductBox>
    ) 
    
  );
}
export default ProductSection;
