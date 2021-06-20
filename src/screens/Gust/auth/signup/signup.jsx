import {  CBox, Input, ImgBox, FormBox } from "../login/login.style";

import{SignupSection} from './signup.style';
import {
  SectionRole,
  Typography,
  ProductImg,
  IneerSection,
  Line,
} from "../../../../Global.style";
import Button from "../../../../components/button/button";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <SectionRole>
      <IneerSection>
        <SignupSection>
          <FormBox>
            <Typography fontSize={60} color={"#242424"}>
            Signup..
            </Typography>
            <Typography fontSize={32} color={"#707070"}>
            Sign up and get exclusive offers from us
            </Typography>
            <Typography fontSize={22} color={"#242424"}>
              Name
            </Typography>
            <Input></Input>
            <Typography fontSize={22} color={"#242424"}>
              Enter your email address
            </Typography>
            <Input></Input>
            <Typography fontSize={22} color={"#242424"}>
              Enter your password
            </Typography>
            <Input></Input>
            <Typography fontSize={22} color={"#242424"}>
              Confirm your password
            </Typography>
            <Input></Input>
            <Button width={"398px"} text={"Login"}></Button>
            
            
            <Line width={398} color={"#707070"} />
            <CBox>
            <Typography fontSize={22} color={"#242424"}>
               Have an account ?
            </Typography> <Link to={'/login'}>Login</Link> 
            </CBox>
          </FormBox>
          <ImgBox>
            <ProductImg width={757} src={"/signupImg.png"} />
          </ImgBox>
        </SignupSection>
      </IneerSection>
    </SectionRole>
  );
}

export default Signup;
