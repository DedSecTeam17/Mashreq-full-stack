import { db } from "../firebase";
import { onValue, ref, push } from "firebase/database";

import AppSessionHelper from "../../utils/user_session";
import UserWord from "../model/user_word";

const COLLECTION_NAME = "users_words";
const ALL_WORDS_COLLECTIONS = "words";

export default class WordsRemoteService {
  getUserId() {
    return new AppSessionHelper().buildUserID();
  }

  async addUserWord(word) {
    try {
      await push(
        ref(db, COLLECTION_NAME),
        new UserWord(this.getUserId(), word).toObject()
      );
      await push(
        ref(db, `${ALL_WORDS_COLLECTIONS}/${word}`),
        new UserWord(this.getUserId(), word).toObject()
      );
    } catch (e) {
      console.log(e);
      throw Error("Something went wrong");
    }
  }

  getAllUserWords(onNewUpdate) {
    const starCountRef = ref(db, COLLECTION_NAME);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      var temArr = [];
      if (data !== null) {
        Object.values(data).forEach((val) => {
          console.log(val);
          temArr.push({ ...val });
        });
      }

      onNewUpdate(temArr);
    });
  }

  async getAllWordsWithCount(onNewUpdate) {
    const starCountRef = ref(db, ALL_WORDS_COLLECTIONS);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      var temArr = [];
      if (data !== null) {
        for (const [key, value] of Object.entries(data)) {
          temArr.push({
            userWord: key,
            count: Object.keys(value).length
          });
        }
      }
      onNewUpdate(temArr);
    });
  }
}
