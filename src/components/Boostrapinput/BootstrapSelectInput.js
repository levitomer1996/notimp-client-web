import React from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: 100,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function BootstrapSelectInput({
  onChangeFunction,
  options,
  value,
  label,
}) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel
          shrink
          htmlFor="bootstrap-input"
          style={{ textAlign: "right" }}
        >
          {label}
        </InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={value}
          onChange={(event) => {
            onChangeFunction(event.target.value);
          }}
          input={<BootstrapInput />}
        >
          <option aria-label={label} value="" />
          {options.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
