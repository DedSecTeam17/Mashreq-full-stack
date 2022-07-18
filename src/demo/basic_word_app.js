import React, { useState } from "react";
import Container from "@mui/material/Container";

import FormComponent from "../components/demo_form";
import RenderListOfWords from "../components/list_of_words";

export default function SimpleMashreqWordsDemo() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Container fixed style={{ margin: "5%" }}>
        <RenderListOfWords data={data} />

        <FormComponent
          onAddWordClicked={(word) => {
            setData([...data, { word }]);

            console.log(data);
          }}
        />
      </Container>
    </div>
  );
}
