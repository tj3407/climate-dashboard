import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  AppBar,
} from "@material-ui/core";

ClimateCard.propTypes = {};

function ClimateCard(props) {
  const [datasets, setDatasets] = React.useState([]);

  React.useEffect(() => {
    if (!props.url) return;

    fetch(props.url, {
      method: "GET",
      headers: {
        token: "wYkAieXfqbXfuNdTiNWEhodKuEVdtUkT",
      },
    })
      .then((res) => res.json())
      .then((data) => setDatasets(data.results));
  }, []);

  return (
    <Grid item xs={3}>
      <Card elevation={0} style={{ border: "1px solid gray" }}>
        <CardContent
          style={{
            textAlign: "left",
            height: 200,
            overflow: "auto",
            padding: 0,
          }}
        >
          <AppBar
            position="sticky"
            style={{ padding: 10 }}
            elevation={0}
            color="secondary"
          >
            {props.label}
          </AppBar>
          <FormControl component="fieldset" style={{ padding: 10 }}>
            {/* <div style={{ position: "sticky" }}>
              <FormLabel component="legend">{props.label}</FormLabel>
            </div> */}
            <FormGroup>
              {datasets &&
                datasets.map((item) => (
                  <FormControlLabel
                    key={item.uid}
                    control={<Checkbox name={item.id} />}
                    label={item.name}
                  />
                ))}
            </FormGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ClimateCard;
