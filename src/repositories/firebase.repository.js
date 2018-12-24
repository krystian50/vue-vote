// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/database';

const config = {
  databaseURL: 'https://test2-206614.firebaseio.com',
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();

export const votesRef = db.ref('votes'); // eslint-disable-line
