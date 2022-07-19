import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import FormComponent from "../components/demo_form";
import RenderListOfWords from "../components/list_of_words";
import WordsRemoteService from "../service/RemoteService/WordsRemoteService";
import { db } from "../service/firebase";
import { ref, onValue } from "firebase/database";
import { CircularProgress } from "@mui/material";

export default function FirebaseMashreqWordsDemo() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new WordsRemoteService().getAllWordsWithCount((snapshot) => {
      setData([]);
      setData([...data, ...snapshot]);
      setIsLoading(false);
    });
  }, []);

  return !isLoading ? (
    <div>
      <Container fixed style={{ margin: "5%" }}>
        <RenderListOfWords data={data} />

        <FormComponent
          onAddWordClicked={(word) => {
            new WordsRemoteService()
              .addUserWord(word)
              .then((r) => {
                console.log(word);
              })
              .catch((err) => alert(err));

            console.log(data);
          }}
        />
      </Container>
    </div>
  ) : (
    <CircularProgress />
  );
}
