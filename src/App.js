import React from "react";
import * as Yup from "yup";
import { Formik, Form, validateYupSchema } from "formik";
import TextField from "@mui/material/TextField";
import Firstname from "./inputs/Textfield";
import Selectin from "./inputs/Selectinput";
import Radioinput from "./inputs/Radioinput";
import Checkinput from "./inputs/Checkbox";

const initialValues = {
  name: "",
  lastname: "",
  email: "",
  gender: "",
  domain: "",
  skills: {
    Html: false,
    Css: false,
    Javascript: false,
    React: false,
  },
};

// select values
const selectitems = [
  { label: "React", value: "Reactjs" },
  { label: "Express", value: "Expressjs" },
  { label: "Node", value: "Nodejs" },
];
// Radio  values
const radioitems = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

// checkBox values//

const checkvalues = [
  { label: "Html", value: "Html" },
  { label: "Css", value: "Css" },
  { label: "Javascript", value: "Javascript" },
  { label: "React", value: "React" },
];
console.log(initialValues);
const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "15rem" }}>
        <h1>Sign in</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            alert(JSON.stringify(values));
          }}
          validationSchema={Yup.object({
            name: Yup.string().min(2, "Too short").required("Required*"),
            lastname: Yup.string().required("Required*"),
            email: Yup.string().required("Required*"),
            domain: Yup.string().required("Required*"),
          })}
        >
          {({ props }) => {
            return (
              <Form>
                <Firstname type={TextField} name="name" label="Firstname" />
                <Firstname type={TextField} name="lastname" label="Lastname" />
                <Firstname
                  type={TextField}
                  name="email"
                  label="email"
                  inputtype="email"
                />
                <Radioinput name="gender" label="Gender" items={radioitems} />
                <Selectin label="Domain" name="domain" items={selectitems} />
                <Checkinput name="skills" label="Skills" items={checkvalues} />
                <button type="submit">Submit</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
export default App;
