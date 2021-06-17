

import CategoriesSection from "./categoriesSection";
import {Container} from './home.style'
import HeroSection from './heroSection'
import ProductSection from './productsSection'
import TopRateSection from './topRateSection'
function Home() {
  
  return (
    <Container>
      <HeroSection></HeroSection>
      <CategoriesSection></CategoriesSection>
      <ProductSection></ProductSection>
      <TopRateSection></TopRateSection>
    </Container>
  );
}
export default Home;
