import React from 'react'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Switch
} from "@material-ui/core";

export default function SwitchCard() {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = checkedOn => event => {
    setState({ ...state, [checkedOn]: event.target.checked });
  };

  return (
    <Card
      style={{ width: "300px", height: "200px", margin: "10px" }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h6">Online Mode</Typography>
        <Typography variant="body1">
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch
          checked={state.checked}
          onChange={handleChange}
          value="online"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </CardActions>
    </Card>
  );
};




  