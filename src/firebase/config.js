import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDQECR0uXJXE_sVDe6K5ePQUoDI-J36deY",
    authDomain: "evgeny-p.firebaseapp.com",
    projectId: "evgeny-p",
    storageBucket: "evgeny-p.appspot.com",
    messagingSenderId: "540127176736",
    appId: "1:540127176736:web:55fed70a7955ad9433f445"
})

const db = getFirestore()

export { db }
