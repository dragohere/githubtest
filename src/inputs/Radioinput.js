import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Field } from "formik";
import React from "react";

const Radioinput = ({ name, label, items }) => {
  return (
    <div>
      <Field as="radio">
        <FormLabel>{label}</FormLabel>
        <RadioGroup row>
          {items.map((item) => {
            return (
              <FormControlLabel
                key={item.value}
                value={item.value}
                label={item.label}
                control={<Radio />}
                name={name}
              />
            );
          })}
        </RadioGroup>
      </Field>
    </div>
  );
};

export default Radioinput;
