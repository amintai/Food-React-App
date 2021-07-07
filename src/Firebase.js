import firebase from "firebase";

 var firebaseApp = {
     // Your web app's Firebase configuration
 
    apiKey: "AIzaSyA3KXzs59_VHB5oPDJKEcfrBqdnttSUD3U",
    authDomain: "react-food-app-22fdb.firebaseapp.com",
    projectId: "react-food-app-22fdb",
    storageBucket: "react-food-app-22fdb.appspot.com",
    messagingSenderId: "491326814593",
    appId: "1:491326814593:web:419819657f156acc3c9080"
}
firebase.initializeApp(firebaseApp)
export default firebase

var db = firebase.firestore()
export {db}