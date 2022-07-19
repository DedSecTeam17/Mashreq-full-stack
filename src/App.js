import React, { useState, useEffect } from "react";
import "./styles.css";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormComponent from "./components/demo_form";
import RenderListOfWords from "./components/list_of_words";
import { Routes, Route, Link } from "react-router-dom";
import SimpleMashreqWordsDemo from "./demo/basic_word_app";
import FirebaseMashreqWordsDemo from "./demo/firebase_word_app";
import FirebaseWithUserWordsMashreqWordsDemo from "./demo/firebase_word_app_with_client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import DeviceUUID from "device-uuid";
import AppSessionHelper from "./utils/user_session";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(Date.now() + Math.random());

    console.log(new AppSessionHelper().buildUserID());
  }, []);
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#ff5e00"
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f"
      }
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="demo1" element={<SimpleMashreqWordsDemo />} />
          <Route path="demo2" element={<FirebaseMashreqWordsDemo />} />
          <Route
            path="demo3"
            element={<FirebaseWithUserWordsMashreqWordsDemo />}
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}
