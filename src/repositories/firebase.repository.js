// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/firestore';

const config = {
  projectId: 'test2-206614',
  databaseURL: 'https://test2-206614.firebaseio.com',
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });


export const votesRef = db.collection('votes'); // eslint-disable-line
export default {
  votesRef,
  addVote(vote) {
    return votesRef.add({ ...vote });
  },
  resetVotes() {
    return votesRef.get().then((snapshotsArray) => {
      snapshotsArray.forEach(el => votesRef.doc(el.id).delete());
    });
  },

};
