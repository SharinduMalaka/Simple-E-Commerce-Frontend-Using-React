import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const RegisterForm = () => {
  const initialValues = { email: "", password: "", confirmPassword: "" };

  // Validation schema with Yup
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Registration Data", values);
    
    // Simulate a successful registration
    setTimeout(() => {
      alert("Registration successful!");  // Success alert
      setSubmitting(false);               // Stop form submission state
      resetForm();                        // Reset the form fields
    }, 1000); // Simulate an API call delay (1 second)
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Email: </label>
              <Field name="email" type="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password: </label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Confirm Password: </label>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
              />
              <ErrorMessage name="confirmPassword" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;