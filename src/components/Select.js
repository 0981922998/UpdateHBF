import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({


}));
export default function Select(props) {
  const classes = useStyles();
  const { name, label, value, error = null, onChange, options,fullWidth} = props;

  return (
    <FormControl {...(error && { error: true })} size="small" fullWidth>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange} displayEmpty variant="outlined" fullWidth >
        <MenuItem value="">None</MenuItem>
        {options
          ? options.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))
          : ""}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}