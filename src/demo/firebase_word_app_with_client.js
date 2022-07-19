import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";

import FormComponent from "../components/demo_form";
import RenderListOfWords from "../components/list_of_words";
import WordsRemoteService from "../service/RemoteService/WordsRemoteService";
import { db } from "../service/firebase";
import { ref, onValue } from "firebase/database";
import { CircularProgress, Skeleton } from "@mui/material";
import AppSessionHelper from "../utils/user_session";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function FirebaseWithUserWordsMashreqWordsDemo() {
  const [data, setData] = useState([]);

  const [myData, setMyData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData([]);

    new WordsRemoteService().getAllUserWords((snapshot) => {
      setMyData([...myData, ...snapshot]);
      setIsLoading(false);
    });

    new WordsRemoteService().getAllWordsWithCount((snapshot) => {
      setData([]);
      setData([...data, ...snapshot]);
      setIsLoading(false);
    });
  }, []);

  return !isLoading ? (
    <div>
      <Container fixed style={{ margin: "5%" }}>
        <Accordion style={{ marginBottom: "5%" }}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <p>My Words</p>
          </AccordionSummary>
          <AccordionDetails>
            <RenderListOfWords
              data={myData.filter((word) => {
                return (
                  word.userID ===
                  new AppSessionHelper().getUserIDFromLocal().toString()
                );
              })}
            />
          </AccordionDetails>
        </Accordion>

        <RenderListOfWords data={data} />

        <div>
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
        </div>
      </Container>
    </div>
  ) : (
    <CircularProgress />
  );
}
