class Vote {
  constructor(userId, vote, note = '') {
    this.userId = userId;
    this.vote = vote; // YES | NO | DUNO
    this.note = note;
  }
}

export default Vote;
