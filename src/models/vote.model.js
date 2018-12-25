class Vote {
  constructor(userId, vote, note = '') {
    this.userId = userId; // will be taken from vuex persistantstore - localstorage
    this.vote = vote; // YES | NO | DUNO
    this.note = note;
  }
}

export default Vote;
