import { Typography } from "../../../Global.style";

import CategoriesCard from "../../../components/categoriesCard/categoriesCard";
import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";
import { FeaturedBox, Line, Cards } from "./home.style";

function CategoriesSection() {
  return (
    <SectionRole>
      <IneerSection>
        <FeaturedBox>
          <Typography fontSize={32}>Featured Categories</Typography>
          <Line color={"#FCDD06"} height={"7px"}></Line>
          <Line color={"#707070"} height={"1px"} width={"90%"}></Line>
          <Cards>
            <CategoriesCard src={"/labtop.png"} title={"Labtop"} />
            <CategoriesCard src={"/labtop.png"} title={"Labtop"} />
            <CategoriesCard src={"/labtop.png"} title={"Labtop"} />
            <CategoriesCard src={"/labtop.png"} title={"Labtop"} /> 
          </Cards>
        </FeaturedBox>
      </IneerSection>
    </SectionRole>
  );
}
export default CategoriesSection;
