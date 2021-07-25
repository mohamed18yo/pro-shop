
import { TopRateBox, Line, TopSubBox } from "./home.style";
import { Typography,IneerSection, SectionRole} from "../../../Global.style";
import ProductBox from "../../../components/productBox/productBox";

function TopRatSection({products}) {
  return (
    <SectionRole>
      <IneerSection>
        <TopRateBox>
          <Typography fontSize={32}>TOP RATE PRODUCTS</Typography>
          <Line color={"#FCDD06"} height={"7px"}></Line>
          <Line color={"#707070"} height={"1px"} width={"100%"}></Line>

          <TopSubBox>
            {products.map((item)=><ProductBox
              product={item}
              id={item._id}
              src={"https://proshop-ms.herokuapp.com/" +item.image}
              rate={item.rating}
              price={item.price}
              title={item.name}
              name={item.name}
              height={"540px"}
            >
            </ProductBox>
            )}
          </TopSubBox>
        </TopRateBox>
      </IneerSection>
    </SectionRole>
  );
}

export default TopRatSection;
