import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Field, Form as ReactFinalForm } from "react-final-form";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { validate } from "../../services/yupService";
import { StyledComponent } from "./styles";

function FormLogin(props) {
  const history = useHistory();
  const [isError, setIsError] = useState(false);
  const [isShowFormElementError, setIsShowFormElementError] = useState(false);
  const listCorrectUsers = [
    {
      userName: "test@example.com",
      password: "123456"
    }
  ];

  const initialFormValue = {
    userName: "",
    password: ""
  };
  const validationSchema = Yup.object({
    userName: Yup.string().required("*Required"),
    password: Yup.string().required("*Required")
  });
  const onSubmit = (values, form) => {
    console.log("values", values);
    console.log("form", form);
    console.log("listCorrectUsers", listCorrectUsers);
    if (
      listCorrectUsers.some(singleCorrectUser => {
        console.log("singleCorrectUser", singleCorrectUser);
        console.log("values", values);
        return (
          singleCorrectUser.userName === values.userName &&
          singleCorrectUser.password === values.password
        );
      })
    ) {
      setIsError(false);
      history.push("/login-success");
    } else {
      console.log("form", form);
      setIsError(true);
      //   setIsShowFormElementError(true);
      form.reset();
      //   form.initialize(initialFormValue);
      form.resetFieldState("userName");
      form.resetFieldState("password");
    }
    return;
  };
  const agc = () => {
    // setIsError(false);
  };
  return (
    <StyledComponent>
      <div className="container">
        <h3 className="title">Login Form</h3>
        <ReactFinalForm
          onSubmit={onSubmit}
          initialValues={initialFormValue}
          validate={values => validate(values, validationSchema)}
          render={({ handleSubmit, form }) => (
            <form onSubmit={(event, form) => handleSubmit(event, form)}>
              <Field name="userName" onChange={agc()}>
                {({ input, meta }) => (
                  <div className="inputElement">
                    <input
                      {...input}
                      type="text"
                      placeholder="&#xF007; Username"
                      style={{ fontFamily: "Arial, FontAwesome" }}
                    />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
              <Field name="password" onChange={agc()}>
                {({ input, meta }) => (
                  <div className="inputElement">
                    <input
                      {...input}
                      type="password"
                      placeholder="&#xF023; Password"
                      style={{ fontFamily: "Arial, FontAwesome" }}
                    />
                    {meta.touched && meta.error && (
                      <div className="error">{meta.error}</div>
                    )}
                  </div>
                )}
              </Field>
              <div className="buttonWrapper">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </div>
              {isError && (
                <div className="errorResult">
                  *Thông tin đăng nhập không chính xác
                </div>
              )}
              {/* <div className="sectionSocialIcon">
                <h4>Or login with</h4>
                <div className="socialIcons">
                  <p>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa fa-facebook-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://www.google.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa fa-google-plus-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </p>
                </div>
              </div>
              <div className="sectionForgotPassword">
                <h4>Forgot your password?</h4>
                <p>
                  no worries, click {<Link to="">here</Link>} to reset your
                  password
                </p>
              </div>
              <div className="sectionForgotPassword">
                Don't have an coount yet?{" "}
                {<Link to="/sign/up">Create an account</Link>}
              </div> */}
            </form>
          )}
        />
      </div>
    </StyledComponent>
  );
}

export default FormLogin;
