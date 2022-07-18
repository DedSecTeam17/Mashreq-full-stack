import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";

import FormComponent from "../components/demo_form";
import RenderListOfWords from "../components/list_of_words";
import WordsRemoteService from "../service/RemoteService/WordsRemoteService";
import {db} from "../service/firebase";
import {ref, onValue} from "firebase/database";
import {CircularProgress, Skeleton} from "@mui/material";
import AppSessionHelper from "../utils/user_session";

export default function FirebaseWithUserWordsMashreqWordsDemo() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setData([])

        new WordsRemoteService().getAllUserWords((snapshot) => {
            var temArr = []
            Object.values(snapshot).forEach(val => {
                console.log(val);
                temArr.push({...val})
            });
            setData([...data, ...temArr])
            setIsLoading(false)

        })
    }, [])


    return !isLoading ? (
        <div>
            <Container fixed style={{margin: "5%"}}>
                <h3>Others Words</h3>
                <RenderListOfWords data={data.reverse()}/>
                <h3>My Words</h3>
                <RenderListOfWords data={data.filter((word)=>{
                    return word.userID === new AppSessionHelper().getUserIDFromLocal().toString()
                })}/>
               <div >
                   <FormComponent
                       onAddWordClicked={(word) => {
                           new WordsRemoteService().addUserWord(word).then(r => {
                               console.log(word)

                           }).catch(err => alert(err))

                           console.log(data);
                       }}
                   />
               </div>
            </Container>
        </div>
    ) : <CircularProgress/>
        ;
}
