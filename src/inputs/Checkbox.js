import { Field } from "formik";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
} from "@mui/material";
import React from "react";

const Checkinput = ({ name, label, items }) => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Label"
          name={name.Html}
          value="html"
        />
        <FormControlLabel control={<Checkbox />} label="Disabled" />
      </FormGroup>
    </div>
  );
};

export default Checkinput;
