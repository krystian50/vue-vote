class Vote {
  userId = ''; // will be taken from vuex persistantstore - localstorage

  constructor(vote, note = '') {
    this.vote = vote; // YES | NO | DUNO
    this.note = note;
  }
}

export default Vote;
