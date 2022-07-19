import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function FormComponent(props) {
  const [word, setWord] = useState("");

  return (
    <>
      {" "}
      <Grid container spacing={2} style={{ marginTop: "5%" }}>
        <Grid xs={12} md={7} xl={7} lg={7} style={{ margin: "1%" }}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="word"
            value={word}
            variant="outlined"
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
        </Grid>

        <Grid xs={12} md={3} xl={3} lg={3} style={{ margin: "1%" }}>
          <Button
            onClick={() => {
              props.onAddWordClicked(word);
              setWord("");
            }}
            style={{ width: "100%", height: "60px" }}
            variant="contained"
          >
            ADD WORD
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
