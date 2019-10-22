import firebase from 'firebase';
import 'firebase/database';

const config = {
  // cofig data
};
firebase.initializeApp(config);

export default firebase.database();
