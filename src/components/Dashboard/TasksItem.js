import { useState } from "react";
import { styled } from "@material-ui/styles";
import { Checkbox, FormControlLabel } from "@mui/material";

const TasksItem = ({ id, status, label }) => {
  const [checked, setChecked] = useState(status);
  const handleChange = (e) => setChecked(e.target.checked);

  // style
  const FormControlLabelStyle = styled(FormControlLabel)(({ theme }) => ({
    "& .MuiCheckbox-root": {
      transition: "all 0.5s ease",
      color: theme.palette.blue.dark,
      "&:hover": {
        backgroundColor: theme.palette.blue.light,
      },
    },

    "& .Mui-checked	": {
      color: `${theme.palette.blue.dark} !important`,
    },

    "& .MuiFormControlLabel-label": {
      color: checked ? theme.palette.text.disabled : "inherit",
      textDecoration: checked ? "line-through" : null,
    },
  }));

  return (
    <FormControlLabelStyle
      key={id}
      control={<Checkbox checked={checked} onChange={handleChange} name={id} />}
      label={label}
    />
  );
};

export default TasksItem;
