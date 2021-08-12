import { Typography } from "../../../Global.style";

import CategoriesCard from "../../../components/categoriesCard/categoriesCard";
import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";
import { FeaturedBox, Line, Cards } from "./home.style";
// 
function CategoriesSection({categories}) {
  console.log("se",categories)
  return (
    <SectionRole>
      <IneerSection>
        <FeaturedBox>
          <Typography fontSize={32}>Featured Categories</Typography>
          <Line color={"#06aefc"} height={"7px"}></Line>
          <Line color={"#707070"} height={"1px"} width={"90%"}></Line>
          <Cards> 
         {
           categories.map((item)=><CategoriesCard src={item.image} title={item.title} />
           )

         }                 
          </Cards>
        </FeaturedBox>
      </IneerSection>
    </SectionRole>
  );
}
export default CategoriesSection;
