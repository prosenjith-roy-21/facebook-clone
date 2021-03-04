import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCOQmt6Kteh2nTVm8G-u0_OFiLq4RLnm-M",
    authDomain: "facebook-clone-e1c5f.firebaseapp.com",
    projectId: "facebook-clone-e1c5f",
    storageBucket: "facebook-clone-e1c5f.appspot.com",
    messagingSenderId: "734714875286",
    appId: "1:734714875286:web:223aaa85b6c3b2717961b7"
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db