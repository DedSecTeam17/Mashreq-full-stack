import React, { useState } from "react";
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

export default function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="demo1" element={<SimpleMashreqWordsDemo />} />
      </Routes>
    </div>
  );
}
