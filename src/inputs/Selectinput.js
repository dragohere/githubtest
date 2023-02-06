import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Select,
  Checkbox,
} from "@mui/material";
import { Field, ErrorMessage } from "formik";
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
      <ErrorMessage
        name={name}
        render={(msg) => <div className="error">{msg}</div>}
      />
      <div>
        <FormControl>
          <FormLabel>Demo</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={true} name="Html" />}
              label="Gilad Gray"
            />
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default Selectinput;
