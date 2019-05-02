// vendor
import React from "react";
import { makeStyles } from "@material-ui/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

// proj
import { useStateValue, SET_FEED_LIMIT } from "state";

// own
const useStyles = makeStyles({});

export const PostsFeedLimitSelect = () => {
  const classes = useStyles();

  const [{ limit }, dispatch] = useStateValue();

  const _selectLimit = event =>
    dispatch({ type: SET_FEED_LIMIT, payload: event.target.value });

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="limit">
        Limit
      </InputLabel>
      <Select
        value={limit}
        onChange={_selectLimit}
        input={<Input name="limit" id="limit" />}
        displayEmpty
        name="limit"
        className={classes.selectEmpty}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
      <FormHelperText>Select displayed posts limit</FormHelperText>
    </FormControl>
  );
};
