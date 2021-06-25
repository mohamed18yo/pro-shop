

import { SectionRole,IneerSection, } from '../../../Global.style';
import ProductSection from './productSection';
import ReviewsSection from './reviewsSection';
import FeaturedProductsSection from '../../Gust/home/featuredProductsSection'
function ProductPage() {
    return <SectionRole>
        <IneerSection>
            <ProductSection></ProductSection>
            <ReviewsSection></ReviewsSection>
            <FeaturedProductsSection></FeaturedProductsSection>
        </IneerSection>
    </SectionRole>
}
export default ProductPage; 