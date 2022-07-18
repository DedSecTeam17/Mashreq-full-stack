import {db} from '../firebase'
import {onValue, ref, set,push} from "firebase/database";

import AppSessionHelper from "../../utils/user_session";
import UserWord from "../model/user_word";


const COLLECTION_NAME = "users_words"

export default class WordsRemoteService {

    getUserId() {
        return new AppSessionHelper().buildUserID()
    }

    async addUserWord(word) {

        try {
            await push(ref(db, COLLECTION_NAME), new UserWord(this.getUserId(), word).toObject());
        } catch (e) {
            console.log(e)
            throw Error("Something went wrong")
        }

    }

     getAllUserWords(onNewUpdate) {
        const starCountRef = ref(db, COLLECTION_NAME);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            onNewUpdate(data);
        });
    }

}


