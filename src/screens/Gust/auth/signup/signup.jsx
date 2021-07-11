import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { SignupSchema } from "../../../../validationSchema";
import { RegisterAction } from "../../../../redux/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Button from "../../../../components/button/button";
import {
  CBox,
  Input,
  ImgBox,
  FormBox,
  ErrorMsg,
  SignupSection,
} from "../auth.style";
import {
  SectionRole,
  Typography,
  ProductImg,
  IneerSection,
  Line,
} from "../../../../Global.style";

function Signup() {
  const state = useSelector((state) => state);
  const isLoading = state.userDetailes.isLoading;
  const error = state.userDetailes.error;
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmitForm = async (values) => {
    dispatch(RegisterAction(values, history));
  };

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
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={onSubmitForm}
            >
              {({ errors, touched }) => {
                return (
                  <Form>
                    <Typography fontSize={22} color={"#242424"}>
                      Name
                    </Typography>
                    <Input
                      name={"name"}
                      type={"name"}
                      placeholder={"name"}
                    ></Input>
                    <Typography fontSize={22} color={"#242424"}>
                      Enter your email address
                    </Typography>
                    <Input
                      name={"email"}
                      type={"email"}
                      placeholder={"email"}
                    ></Input>
                    {errors.email && touched.email ? (
                      <ErrorMsg>{errors.email}</ErrorMsg>
                    ) : null}

                    <Typography fontSize={22} color={"#242424"}>
                      Enter your password
                    </Typography>
                    <Input
                      name={"password"}
                      type={"password"}
                      placeholder={"password"}
                    ></Input>
                    {errors.password && touched.password ? (
                      <ErrorMsg>{errors.password}</ErrorMsg>
                    ) : null}

                    <Typography fontSize={22} color={"#242424"}>
                      Confirm your password
                    </Typography>
                    <Input
                      name={"confirmPassword"}
                      type={"password"}
                      placeholder={"confirm password"}
                    ></Input>
                    {errors.password && touched.password ? (
                      <ErrorMsg>{errors.password}</ErrorMsg>
                    ) : null}

                    <Button
                      isLoading={isLoading}
                      width={"398px"}
                      text={"SignUp"}
                    ></Button>
                    {error ? <ErrorMsg>{error}</ErrorMsg> : null}
                  </Form>
                );
              }}
            </Formik>

            <Line width={398} color={"#707070"} />
            <CBox>
              <Typography fontSize={22} color={"#242424"}>
                Have an account ?
              </Typography>{" "}
              <Link to={"/login"}>Login</Link>
            </CBox>
          </FormBox>
          <ImgBox>
            <ProductImg width={"75%"} src={"/signupImg.png"} />
          </ImgBox>
        </SignupSection>
      </IneerSection>
    </SectionRole>
  );
}

export default Signup;
