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
  Title,
  Description,
  Label,
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
            <Title>
              Signup..
            </Title>
            <Description >
              Sign up and get exclusive offers from us
            </Description>
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
                    <Label>
                      Name
                    </Label>
                    <Input
                      name={"name"}
                      type={"name"}
                      placeholder={"name"}
                    ></Input>
                    <Label>
                      Enter your email address
                    </Label>
                    <Input
                      name={"email"}
                      type={"email"}
                      placeholder={"email"}
                    ></Input>
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
                    ></Input>
                    {errors.password && touched.password ? (
                      <ErrorMsg>{errors.password}</ErrorMsg>
                    ) : null}

                    <Label>
                      Confirm your password
                    </Label>
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
                      width={"80%"}
                      text={"SignUp"}
                    ></Button>
                    {error ? <ErrorMsg>{error}</ErrorMsg> : null}
                  </Form>
                );
              }}
            </Formik>

            <Line width={"100%"} color={"#707070"} />
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
