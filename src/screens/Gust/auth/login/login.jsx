import { LoginSection, CBox, Input, ImgBox, FormBox } from "./login.style";
import {
  SectionRole,
  Typography,
  ProductImg,
  PrivetButton,
  IneerSection,
  Line,
} from "../../../../Global.style";
import Button from "../../../../components/button/button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <SectionRole>
      <IneerSection>
        <LoginSection>
          <FormBox>
            <Typography fontSize={60} color={"#242424"}>
              Login.
            </Typography>
            <Typography fontSize={32} color={"#707070"}>
              Login with your data that you entered during registration
            </Typography>
            <Typography fontSize={22} color={"#242424"}>
              Enter your email address
            </Typography>
            <Input></Input>
            <Typography fontSize={22} color={"#242424"}>
              Enter your password
            </Typography>
            <Input></Input>
            <Button width={"398px"} text={"Login"}></Button>
            <CBox>
              <input
                style={{ marginRight: "1rem", height: '30px', width:'20px' }}
                type="checkbox"
              ></input>
              <Typography fontSize={22} color={"#707070"}>
                Remember me
              </Typography>
            </CBox>
            <CBox>
              <Typography
                style={{ letterSpacing: "0.88px" }}
                fontSize={22}
                color={"#242424"}
              >
                Forgot your password?
              </Typography>
            </CBox>
            <Line width={398} color={"#707070"} />
            <CBox>
             <Link to={'/signup'}> <PrivetButton>Singup Now</PrivetButton> </Link> 
            </CBox>
          </FormBox>
          <ImgBox>
            <ProductImg width={757} src={"/loginImg.png"} />
          </ImgBox>
        </LoginSection>
      </IneerSection>
    </SectionRole>
  );
}

export default Login;
