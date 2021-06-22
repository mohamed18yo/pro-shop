import {
  LoginSection,
  CBox,
  Input,
  ImgBox,
  ErrorMsg,
  FormBox,
} from "./login.style";
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
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import loginAction from "../../../../redux/user/userAction";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const LoginPost = async (values) => {
    try {
      const res = await axios.post("/user/login", values);
      dispatch(loginAction(res.data));
        // Set user to localStorage
        localStorage.setItem("user", JSON.stringify(res.data));

        history.push("/");
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
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
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={LoginSchema}
              onSubmit={LoginPost}
            >
              {({ errors, toutched }) => {
                return (
                  <Form>
                    <Typography fontSize={22} color={"#242424"}>
                      Enter your email address
                    </Typography>
                    <Input
                      name={"email"}
                      type={"email"}
                      placeholder={"Email"}
                    />
                    {/* {errors.email && toutched.email ? (
                      <p>{errors.email}</p>
                    ) : null} */}
                    <Typography fontSize={22} color={"#242424"}>
                      Enter your password
                    </Typography>
                    <Input
                      name={"password"}
                      type={"password"}
                      placeholder={"password"}
                    />

                    <Button
                      type={"submit"}
                      style={{ marginTop: "2rem" }}
                      width={"398px"}
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
                        style={{ letterSpacing: "0.88px" }}
                        fontSize={22}
                        color={"#242424"}
                      >
                        Forgot your password?
                      </Typography>
                    </CBox>
                  </Form>
                );
              }}
            </Formik>
            <Line width={398} color={"#707070"} />
            <CBox>
              <Link to={"/signup"}>
                <PrivetButton>Singup Now</PrivetButton>{" "}
              </Link>
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
