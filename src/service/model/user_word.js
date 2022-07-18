export default class UserWord {
    constructor(userID, userWord) {
        this._userID = userID;
        this._userWord = userWord;
    }


    get userID() {
        return this._userID;
    }

    get userWord() {
        return this._userWord;
    }

    toObject() {
        let that = this
        return {
            "userID": this._userID,
            "userWord": this._userWord
        }
    }
}
