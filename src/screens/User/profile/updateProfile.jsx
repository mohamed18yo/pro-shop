import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Button from "../../../components/button/button";
import { Formik, Form } from "formik";
import { UpdateProfileSchema } from "../../../validationSchema";
import {
  SectionRole,
  Typography,
  IneerSection,
  SpinnerContainer,
} from "../../../Global.style";
import {
  Input,
  FormBox,
  ErrorMsg,
  SignupSection,
} from "../../Gust/auth/auth.style";

import {
  GetUserDataForUpdateProfile,
  UpdateProfileAction,
} from "../../../redux/user/userAction";

function UpdateProfile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((store) => store);

  const onSubmitForm = async (values) => {
    dispatch(UpdateProfileAction(values, history));
  };
  useEffect(() => {
    dispatch(GetUserDataForUpdateProfile());
  }, [dispatch]);
  return state.userDetailes.isLoading ? (
    <SpinnerContainer />
  ) : (
    <SectionRole>
      <IneerSection>
        <SignupSection>
          <FormBox>
            <Typography fontSize={60} color={"#242424"}>
              Update Profile..
            </Typography>

            <Formik
              initialValues={{
                name: state.userDetailes.userProfile?.user?.name,
                email: state.userDetailes.userProfile?.user?.email,
                password: "",
                confirmPassword: "",
              }}
              validationSchema={UpdateProfileSchema}
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

                    <Button width={"398px"} text={"Update Profile"}></Button>
                    {/* {?<ErrorMsg>{}</ErrorMsg>:null */}
                    {/* } */}
                  </Form>
                );
              }}
            </Formik>
          </FormBox>
        </SignupSection>
      </IneerSection>
    </SectionRole>
  );
}
export default UpdateProfile;
