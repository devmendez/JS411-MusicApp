import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  CardActions,
  Typography,
  Select,
  FormControl
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SelectCard(props) {
  const classes = useStyles();

  return (
    <Card
      style={{ width: "300px", height: "200px", margin: "10px" }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h6">Sound Quality</Typography>
        <Typography variant="body1">
          Manually control the music quality in event of poor connection
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl className={classes.formControl}>
          <InputLabel id="quality-select-label">Quality</InputLabel>
          <Select
            labelId="quality-select-label"
            id="quality-select"
            value={props.value}
            onChange={props.onChange}
          >
            <MenuItem value={10}>Low</MenuItem>
            <MenuItem value={20}>Normal</MenuItem>
            <MenuItem value={30}>High</MenuItem>
          </Select>
        </FormControl>
      </CardActions>
    </Card>
  );
}