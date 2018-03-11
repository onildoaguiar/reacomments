import rebase from 're-base';
import firebase from 'firebase';
import FirebaseConfig from './config/firebase';

const firebaseApp = firebase.initializeApp(FirebaseConfig);

export const auth = firebaseApp.auth();
export const providers = { 'facebook': new firebase.auth.FacebookAuthProvider() }
export default rebase.createClass(firebase.database(firebaseApp));
