import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function RenderListOfWords(props) {
  const cardItems = props.data.map((word,index) => (
    <Grid item xs={6} md={4} xl={2} lg={2}>
      <WordComponent key={index} word={word} />
    </Grid>
  ));

  return (
    <>
      <Grid container spacing={2}>
        {cardItems}
      </Grid>
    </>
  );
}
function WordComponent(props) {
  const { userWord } = props.word;
  return (
    <>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {userWord}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
