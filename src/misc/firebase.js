import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
const cofig = {
    apiKey: "AIzaSyCIvtWaUXBH1yqlerPEUHYy0RPSEdWdvaw",
    authDomain: "chat-web-app-85f61.firebaseapp.com",
    projectId: "chat-web-app-85f61",
    storageBucket: "chat-web-app-85f61.appspot.com",
    messagingSenderId: "594168627528",
    appId: "1:594168627528:web:f1c4e21ef07419d044b37d"
};

const app = firebase.initializeApp(cofig)

export const auth = app.auth()
export const database = app.database()