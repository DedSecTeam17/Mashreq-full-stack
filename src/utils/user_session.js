const session = "USER_ID";

export default class AppSessionHelper {
  buildUserID() {
    let localUserID = this.getUserIDFromLocal();
    if (localUserID === null) {
      this.saveUserIdToLocal();
    } else {
      return localUserID;
    }
  }

  getUserIDFromLocal() {
    return localStorage.getItem(session);
  }

  saveUserIdToLocal() {
    localStorage.setItem(session, this.generateUniqueID());
  }

  generateUniqueID() {
    return `user_${Date.now() + Math.random()}`;
  }
}
