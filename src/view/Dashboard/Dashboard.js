import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Accordion,
  AccordionSummary,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ClimateCard from "../../components/ClimateCard";

Dashboard.propTypes = {};

function Dashboard(props) {
  return (
    <Box padding={4}>
      <Typography variant="h3">Climate Dashboard</Typography>
      <Grid container spacing={4} direction="column">
        <ClimateCard
          label="Datasets"
          //   url="https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets"
          url="https://www.ncdc.noaa.gov/cdo-web/api/v2/locations?locationcategoryid=CITY&name=san"
        />
        {/* <ClimateCard
          label="Data Categories"
          url="https://www.ncdc.noaa.gov/cdo-web/api/v2/datacategories"
        />
        <ClimateCard
          label="Data Types"
          url="https://www.ncdc.noaa.gov/cdo-web/api/v2/datatypes/"
        />
        <ClimateCard
          label="Location Categories"
          url="https://www.ncdc.noaa.gov/cdo-web/api/v2/locationcategories"
        />
        <ClimateCard
          label="Locations"
          url="https://www.ncdc.noaa.gov/cdo-web/api/v2/locations"
        />
        <ClimateCard
          label="Stations"
          url="https://www.ncdc.noaa.gov/cdo-web/api/v2/stations"
        /> */}
      </Grid>
    </Box>
  );
}

export default Dashboard;
