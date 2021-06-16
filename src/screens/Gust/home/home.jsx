import {
  IneerSection,
  SectionRole,
  FlexRow,
} from "../../../components/nav/Nav.Style";

import {
  FeaturedBox,
  HeroBox,
  HeroTitle,
  ProductImg,
  SideBox,
  Container,
  Line,
  Cards,
  Arrow,
  Dot
} from "./home.style";
import { Typography } from "../../../Global.style";
import Button from "../../../components/button/button";
import BoxCard from "../../../components/boxCard/boxCard";

function Home() {
  return (
    <Container>
      <SectionRole color={"#F2F2F2"}>
        <IneerSection>
          <HeroBox>
            <FlexRow>
              <SideBox>
                <Typography fontSize={32} color={"#242424"}>
                  Save up to $39.99
                </Typography>
                <HeroTitle>PlayStation 5</HeroTitle>
                <Typography fontSize={32} color={"#242424"}>
                  Lightning-fast download speed with super-fast SSD storage
                </Typography>
                <Button
                  radius={"20px"}
                  style={{ marginTop: 42, height: 52 }}   
                  text={"SHOP NOW"}
                />
              </SideBox>
              <SideBox>
                <ProductImg src={"/proplaystion.png"} width={507} />
              </SideBox>
            </FlexRow>
            <FlexRow>
              <Arrow isLeft={true}>&#10095;</Arrow>
              <Dot isGray={false}/>
              <Dot isGray={false}/>
              <Dot/>
              <Arrow>&#10095;</Arrow>
            </FlexRow>
          </HeroBox>
        </IneerSection>
      </SectionRole>
      <SectionRole>
        <IneerSection>
          <FeaturedBox>
            <Typography fontSize={32}>Featured Categories</Typography>
            <Line color={"#FCDD06"} height={"7px"}></Line>
            <Line color={"#707070"} height={"1px"} width={"1440px"}></Line>
            <Cards>
              <BoxCard></BoxCard>
              <BoxCard></BoxCard>
              <BoxCard></BoxCard>
              <BoxCard></BoxCard>
            </Cards>
          </FeaturedBox>
        </IneerSection>
      </SectionRole>
    </Container>
  );
}
export default Home;
