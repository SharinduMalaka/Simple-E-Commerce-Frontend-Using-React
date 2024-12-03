import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = { email: "", password: "" };

  // Validation schema with Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    console.log("Login Data", values);

    // Simulate API login
    setTimeout(() => {
      // Assuming a successful login:
      alert("Login successful!");
      setSubmitting(false); // Stop the submitting state
    }, 1000); // Simulate API call delay (1 second)
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Email: </label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input"
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <label>Password: </label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input"
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
