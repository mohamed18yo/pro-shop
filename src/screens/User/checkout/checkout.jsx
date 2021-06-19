

import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";
import RecentlyViewed  from "../../Gust/home/recentlyViewed";
import { Typography,Container } from "../../../Global.style";
import Button from "../../../components/button/button"

import {UpBox,PayInfo,CheckoutBox,DownBox} from './checkout.style'
function Checkout(){
    return <Container>
     <SectionRole>
        <IneerSection>
            <CheckoutBox>
            <UpBox>
                <Typography color={"#242424"} fontSize={32}>Payment Success !</Typography>
                <PayInfo>
                <Typography color={"#242424"} fontSize={24}>Order number</Typography>
                <Typography  color={"#707070"} fontSize={16}>65AS1D56ASD156DS</Typography>
                </PayInfo>
                <PayInfo>
                <Typography color={"#242424"} fontSize={24}>Shipping Address</Typography>
                <Typography color={"#707070"} fontSize={16}>56051 Jones Falls, Philippines, Turkey - 62502</Typography>
                </PayInfo>
                <PayInfo>
                <Typography color={"#242424"} fontSize={24}>Order Items</Typography>
                <Typography color={"#707070"} fontSize={16}>1x iPhone 11 Pro 256GB Memory ,1x Apple Airpods Wireless Bluetooth Headset</Typography>
                </PayInfo>
                <Typography  color={"#707070"} fontSize={16}>An email will be sent to your email address contains order confirmation and tacking code.</Typography>
            </UpBox>
            <DownBox>
                <Button width={"324px"} text={"Keep Shopping"}></Button>
            </DownBox>
            </CheckoutBox>
        </IneerSection>
    </SectionRole>  
    <RecentlyViewed></RecentlyViewed>
    </Container>
}
export default Checkout