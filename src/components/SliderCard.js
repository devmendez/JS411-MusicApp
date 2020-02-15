import React from 'react'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Slider
} from "@material-ui/core";

function valuetext(value) {
  return `${value}`;
}

export default function SliderCard(props) {
  const onChange = props.onChange;
  const value = props.value;
  return (
    <Card
      style={{ width: "300px", height: "200px", margin: "10px" }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h6">Master Volume</Typography>
        <Typography variant="body1">
          Overrides all other sound settings in this application
        </Typography>
      </CardContent>
      <CardActions>
        <Slider
          value={value}
          onChangeCommitted={onChange}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={100}
        ></Slider>
      </CardActions>
    </Card>
  );
}