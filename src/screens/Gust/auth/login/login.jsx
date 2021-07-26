import {
  LoginSection,
  CBox,
  Input,
  ImgBox,
  ErrorMsg,
  FormBox,
  Title,
  Description,
  Label,
  
} from "../auth.style";
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
import { Formik, Form } from "formik";
import { LoginSchema } from "../../../../validationSchema";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router";
import {LoginAction} from "../../../../redux/user/userAction";
import { useLocationWithQuery } from "react-router-query-hooks";
function Login() {
  const locationQuery = useLocationWithQuery();
  const {
    query: { pathname, review, rating },
  } = locationQuery;
  const state = useSelector((state) => state);
  const isLoading= state.userDetailes.isLoading;
  const error= state.userDetailes.error; 
  const history = useHistory();
  const dispatch = useDispatch();
  const SubmitForm= async (values)=>{
    dispatch(LoginAction(values,history,pathname ? `${pathname}?review=${review}&rating=${rating}` : ""));
    
  }
  return (
    <SectionRole>   
      <IneerSection>
        <LoginSection>
          <FormBox>
            <Title  color={"#242424"}>
              Login.
            </Title>
            <Description>
              Login with your data that you entered during registration
            </Description>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={SubmitForm}
            >
              {({ errors, touched }) => {
                return (
                  <Form style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    flexDirection: "column",
                  }}>
                    <Label >
                      Enter your email address
                    </Label>
                    <Input
                      name={"email"}
                      type={"email"}
                      placeholder={"email"}
                    />
                    {errors.email && touched.email ? (
                  <ErrorMsg>{errors.email}</ErrorMsg>
                ) : null}

                    <Label>
                      Enter your password
                    </Label>
                    <Input
                      name={"password"}
                      type={"password"}
                      placeholder={"password"}
                    />
                     {errors.password && touched.password ? (
                          <ErrorMsg>{errors.password}</ErrorMsg>
                       ) : null}
                    {error?( <ErrorMsg>{error}</ErrorMsg>):null}
                    <Button
                      isLoading={isLoading}
                      type={"button"}
                      style={{ marginTop: "2rem" }}
                      width={"80%"}
                      text={"Login"}
                    ></Button>
                    <CBox>
                      <input
                        style={{
                          marginRight: "1rem",
                          height: "30px",
                          width: "20px",
                        }}
                        type="checkbox"
                      ></input>
                      <Typography fontSize={22} color={"#707070"}>
                        Remember me
                      </Typography>
                    </CBox>
                    <CBox>
                      <Typography
                        style={{ letterSpacing: "0.88px",marginTop:'1rem' }}
                        fontSize={18}
                        color={"#242424"}
                      >
                        Forgot your password?
                      </Typography>
                    </CBox>
                  </Form>
                );
              }}
            </Formik>
            <Line width={"80%"} color={"#707070"} />
            <CBox>
              <Link to={"/signup"}>
                <PrivetButton style={{marginTop:'1rem'}}>Singup Now</PrivetButton>{" "}
              </Link>   
            </CBox>
          </FormBox>
          <ImgBox>
            <ProductImg width={"75%"} src={"/loginImg.png"} />
          </ImgBox>
        </LoginSection>
      </IneerSection>
    </SectionRole>
  );
}

export default Login;
