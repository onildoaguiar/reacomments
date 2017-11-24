import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAAy2F9TChTrAzWXHX1FpqjfGTgkXkgqiw",
    authDomain: "comments-react.firebaseapp.com",
    databaseURL: "https://comments-react.firebaseio.com",
    projectId: "comments-react",
    storageBucket: "",
    messagingSenderId: "465290805036"
})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base