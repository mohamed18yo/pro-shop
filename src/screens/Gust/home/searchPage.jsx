import { Typography,FlexRow,IneerSection, SectionRole} from "../../../Global.style";


import { BoxResult } from "./home.style";
import ProductBox from "../../../components/productBox/productBox";
import {  useSelector } from "react-redux";


function SearchPage(){
    const state= useSelector((state)=>state)
    const Products= state.gustState.searchResult;
    console.log(Products)
    return <SectionRole>
        <IneerSection>
            <FlexRow style={{marginTop:'2rem'}}>
                <Typography  fontSize={35}>Search Result...</Typography>
            </FlexRow>
            
            <BoxResult>
                {Products.products.map((item)=> <ProductBox 
                      product={item}
                      key={item._id}
                      id={item._id}
                      name={item.name}
                      src={"https://proshop-ms.herokuapp.com/" +item.image}
                      rate={item.rating}
                      price={item.price}
                      title={item.name}
                    ></ProductBox>
                
                )}
            
            </BoxResult>
        </IneerSection>
    </SectionRole>
}

export default SearchPage;