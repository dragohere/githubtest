import { FormControl, FormLabel, MenuItem, Select } from "@mui/material";
import { Field } from "formik";
import React from "react";

const Selectinput = ({ name, label, items }) => {
  return (
    <div>
      <FormLabel>{label}</FormLabel>
      <Field as={Select} fullWidth name={name} label={label}>
        {items.map((item) => {
          return (
            <MenuItem key={item.label} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Field>
    </div>
  );
};

export default Selectinput;
