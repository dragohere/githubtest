import React from "react";
import { Field } from "formik";
import { TextField } from "@mui/material";
import { ErrorMessage } from "formik";

const Textfield = ({ name, label, type, inputtype = "text", value }) => {
  return (
    <div>
      <Field
        as={type}
        name={name}
        label={label}
        fullWidth
        type={inputtype}
        helperText={<ErrorMessage name={name} />}
        // required
        value={value}
      />
    </div>
  );
};

export default Textfield;
