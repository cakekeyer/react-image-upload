import React from "react";
import { Grid, Typography } from "@material-ui/core";

const headers = [
  {
    value: "Header",
    label: "Multi step Form",
    variant: "h3"
  },
  {
    value: "Description",
    label: `Upload and validate image inputs using formik...`,
    variant: "subtitle1"
  }
];

export default function (props) {
  return (
    <React.Fragment>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12}>
          {headers.map((header, index) => {
            return (
              <Typography
                style={{ width: "100%" }}
                key={index}
                variant={header.variant}
                color="textSecondary"
                align="center"
              >
                {header.label}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
