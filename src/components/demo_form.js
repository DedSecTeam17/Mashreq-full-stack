import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Validator from "../utils/validator.js";

export default function FormComponent(props) {
  const [word, setWord] = useState("");

  return (
    <>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white" }}
        sx={{ top: "auto", bottom: 0 }}
      >
        <Grid style={{ padding: "5%" }}>
          <Grid container spacing={2}>
            <Grid xs={12} md={7} xl={7} lg={7} style={{ margin: "1%" }}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="word"
                pattern="/^\S*$/"
                value={word}
                variant="outlined"
                onChange={(e) => {
                  const word = e.target.value.trim();
                  if (Validator.maxWordSize(word.toString(), 30)) {
                    setWord(word);
                  }
                }}
              />
            </Grid>

            <Grid xs={12} md={3} xl={3} lg={3} style={{ margin: "1%" }}>
              <Button
                onClick={() => {
                  props.onAddWordClicked(word);
                  setWord("");
                }}
                style={{ width: "100%", height: "50px" }}
                variant="contained"
              >
                ADD WORD
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
}
