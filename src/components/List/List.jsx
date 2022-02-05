import React, { useState } from "react";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

const List = () => {
  const places = [
    { name: "Cool place" },
    { name: "Best Beer" },
    { name: "Best Stake" },
  ];
  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState("");
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5">
        Restaurants, Hotels, and Attractions around you
        <br />
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="Restaurants">Restaurants</MenuItem>
          <MenuItem value="Hotels">Hotels</MenuItem>
          <MenuItem value="Attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, index) => (
          <Grid item xs={12} key={index}>
            <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default List;
