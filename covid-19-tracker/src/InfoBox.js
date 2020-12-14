import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, isGreen, isYellow, onClick }) {
  return (
    <Card
      onClick={onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${
        isYellow && "infoBox--yellow"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${isGreen && "infoBox__cases--green"} ${isYellow && "infoBox__cases--yellow"}`}>
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
