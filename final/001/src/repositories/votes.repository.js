import FirebaseService from './firebase.service';

const votesRef = FirebaseService.collection('votes');

export default {
  votesRef,
  addVote(vote) {
    return votesRef.add({ ...vote });
  },
  async resetVotes() {
    const snapshotsArray = await votesRef.get();
    snapshotsArray.forEach(el => votesRef.doc(el.id).delete());
  },
};
