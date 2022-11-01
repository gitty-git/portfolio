import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAP3Pie-cCOGxL_3KJHrlWQkxZ1c7ZvsC4",
    authDomain: "evgeny-p.firebaseapp.com",
    projectId: "evgeny-p",
    storageBucket: "evgeny-p.appspot.com",
    messagingSenderId: "540127176736",
    appId: "1:540127176736:web:55fed70a7955ad9433f445"
})

const analytics = getAnalytics(firebaseApp);

const db = getFirestore()

export { db }
