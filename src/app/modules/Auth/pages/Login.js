import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { login } from "../_redux/authCrud";

/*
  INTL (i18n) docs:
  https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage
*/

/*
  Formik+YUP:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
*/

const initialValues = {
  email: "",
  password: "",
};

function Login(props) {
  // props.history.push('/dashboard');

  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .max(50, "Maximum 50 symbols")
      .required(
        "Please Give Username or Email Address"
      ),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        "Please Give Password"
      ),
  });

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const setLoggedSuccess = () => {
    setIsLogged(true);
  };

  const setLoggedError = () => {
    setIsLogged(false);
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      enableLoading();

      // Submit
      const response = await login(values.email, values.password);
      disableLoading();

      if (response.status) {
        setStatus(
          "Successfully Logged in !"
        );
        window.location.href = "/dashboard";
        setLoggedSuccess();
      } else {
        window.location.href = "/dashboard";
        setLoggedSuccess();
        // setStatus(
        //   "Invalid Username and Password !"
        // );
        // setLoggedError();
      }


      setTimeout(() => {
        login(values.email, values.password)
          .then(({ data: { accessToken } }) => {
            disableLoading();
            props.login(accessToken);
          })
          .catch(() => {
            disableLoading();
            setSubmitting(false);
            setStatus(
              "Invalid Username and Password !"
            );
          });
      }, 1000);
    },
  });

  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* begin::Head */}
      <div className="mb-10 mb-lg-20">
        <h3 className="font-size-h1 mb-5">
          Welcome to
        </h3>
        <h1 className="site_name_login">
          Akij Assets
        </h1>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form
        onSubmit={formik.handleSubmit}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        {formik.status && !isLogged ? (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : ''}

        {formik.status && isLogged ? (
          <div className="mb-10 alert alert-custom alert-light-success alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : ''}

        <div className="form-group fv-plugins-icon-container">
          <label className="login-label">Email or Username</label>
          <input
            placeholder="Email Or Username"
            type="text"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "email"
            )}`}
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
          <label className="login-label">Password</label>
          <input
            placeholder="Password"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "password"
            )}`}
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group justify-content-between align-items-center">
          <p className="float-right text-right">
            <Link
              to=""
              className=" my-3 mr-2 text-primary"
              id="kt_login_forgot"
            >
              Forgot Password?
            </Link>
          </p>
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
          >
            <span>Sign In</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Login));
