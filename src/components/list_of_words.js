import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

export default function RenderListOfWords(props) {
  const cardItems = props.data.map((word, index) => (
    <Grid item>
      <WordComponent key={index} word={word} />
    </Grid>
  ));

  return (
    <>
      <Grid container spacing={2}>
        {cardItems}
        <div style={{ height: "250px" }}></div>
      </Grid>
    </>
  );
}
function WordComponent(props) {
  const { userWord, count } = props.word;
  return (
    <>
      {/* <Chip color="primary" label={userWord} /> */}
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "#ff5e00",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "20px"
        }}
      >
        <p
          style={{
            color: "white",
            padding: "5px",

            textAlign: "center"
          }}
        >
          {userWord}{" "}
        </p>
        {count && (
          <div
            style={{
              width: "25px",
              height: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: "100%",
              color: "orange"
            }}
          >
            <span>{count}</span>
          </div>
        )}
      </div>
    </>
  );
}
